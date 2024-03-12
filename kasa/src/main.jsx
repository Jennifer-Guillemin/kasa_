import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

const Home = () => (
  <div>
    <h2>Bienvenue sur la page d'accueil !</h2>
    <p>C'est une application React avec React Router.</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <h1>Mon Application React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {/* Ajoutez d'autres liens pour les pages supplémentaires */}
          {/* <li>
            <Link to="/autre-page">Autre Page</Link>
          </li> */}
        </ul>
      </nav>
      <hr />
      <Route exact path="/" component={Home} />
      {/* Ajoutez d'autres routes pour les pages supplémentaires */}
      {/* <Route path="/autre-page" component={AutrePage} /> */}
    </div>
  </Router>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
