import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </header>
        <main role="main" className="App-body">
          <p>Login to access full dashboard</p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="Password">Password</label>
          <input type="Password" />
          <button type="button">OK</button>
        </main>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)} 
          </p>
        </footer>
    </div>
  );
}

export default App;
