// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import { Segment, Loader, Dimmer, Grid, Header, Icon } from "semantic-ui-react";
import PolicyGen from "./Components/PolicyGen";
import PolicyGenHeader from "./Components/PolicyGenHeader";

function App() {
  const [data, setData] = useState(undefined);
  const [loadedData, setLoadedData] = useState(false);
  // const [error, setError] = useState(false);
  const [policy, setPolicy] = useState({
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Action: [],
        Resource: "*",
      },
    ],
  });

  const updatePolicy = (service, actions) => {
    const statement = policy.Statement[0];
    const newActions = actions.map(
      (action) => `${data.get(service).prefix}:${action.title}`
    );
    statement.Action = newActions;
    setPolicy({ ...policy, Statement: [statement] });
  };

  const fetchData = async () => {
    try {
      const response = await fetch("./iam_definition.json");
      const json = await response.json();
      return { success: true, data: json };
    } catch (e) {
      return { success: false };
    }
  };

  useEffect(async () => {
    if (loadedData === true) {
      return;
    }
    setLoadedData(false);
    const res = await fetchData();
    if (res.success) {
      const dataMap = new Map();
      const dataArray = [];
      res.data.forEach((element) => {
        dataMap.set(`${element.prefix} (${element.service_name})`, element);
        dataArray.push({
          title: `${element.prefix} (${element.service_name})`,
        });
      });
      dataMap.set("__services", dataArray);
      setData(dataMap);
    } else {
      // setError(true);
      // TODO: surface error to user
    }
    setLoadedData(true);
  }, []);

  return (
    <div className="App">
      <PolicyGenHeader />
      {loadedData ? (
        <Segment>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <PolicyGen dataMap={data} updatePolicy={updatePolicy} />
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">
                  <Icon name="code" />
                  <Header.Content>Generated IAM Policy</Header.Content>
                </Header>
                <pre>{JSON.stringify(policy, null, 2)}</pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      ) : (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
}

export default App;
