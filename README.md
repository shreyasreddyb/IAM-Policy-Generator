# IAM Policy Generator

An interactive web application to **search, explore, and generate AWS IAM policies** with ease.  
It provides a simple UI to browse AWS services, understand their available actions, conditions, and resources, and build fine-grained IAM policies without manually going through AWS documentation.

---

## 🚀 Features

- 🔎 **Search AWS Services & Actions** — Quickly find IAM actions across AWS services.  
- 🛡 **Policy Generator** — Select actions, resources, and conditions to build IAM policies.  
- 📂 **Preloaded Definitions** — Uses `iam_definition.json` for AWS services, actions, and conditions.  
- 🌐 **Web-based Interface** — No setup required beyond running a React app.  
- ⚡ **Fast & Lightweight** — Built with React and optimized for performance.  

---

## 📂 Project Structure

```
public/
  iam_definition.json   # AWS IAM service/action definitions
  index.html
  manifest.json
  robots.txt
src/
  Components/
    PolicyGen.js        # Core policy generator logic
    PolicyGenHeader.js  # Header/navigation bar
    Search.js           # Search functionality
  App.js                # Main app entry
  App.css               # Global styles
  index.js              # React entrypoint
  index.css
  logo.svg
  setupTests.js
.eslintrc.json
.gitignore
.prettierignore
package.json
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (>= 16.x recommended)  
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/IAM-Policy-Generator.git
   cd IAM-Policy-Generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 📖 Usage

1. Select a service (e.g., `EC2`, `S3`, `IAM`).  
2. Search for available actions and filter them by access level (Read, Write, List, Tagging, Permissions).  
3. Add desired actions to your policy.  
4. Define resources and conditions as needed.  
5. Export the generated policy in **JSON format**.  

---

## 📸 Screenshots

*(Add screenshots here showing the policy generator in action)*

---

## 🧩 Tech Stack

- **Frontend:** React (Create React App)  
- **Styling:** CSS (with custom components)  
- **Data Source:** AWS IAM service/action definitions JSON (`iam_definition.json`)  

---

## 📌 Roadmap

- [ ] Export to AWS Console-ready JSON policies  
- [ ] Support for policy validation  
- [ ] Dark mode  
- [ ] Integration with AWS IAM Access Analyzer  

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.  
Make sure to run ESLint and Prettier before committing:

```bash
npm run lint
npm run format
```

---

## 📜 License

This project is licensed under the **MIT License** 
