import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="404_text">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
