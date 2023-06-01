import logo from ".images/logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <footer className="App-footer mt-4">
          This app was coded by Dominique Dykes and is{" "}
          <a
            href="https://github.com/DominiqueDykes/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
