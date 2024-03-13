import { useState } from "react";
import Home from "./Home";
import Logements from "./Logements";
import Error404 from "./Error404";
import Apropos from "./Apropos";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Kasa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
