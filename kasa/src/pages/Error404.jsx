import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div className="text_404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n`existe pas.</p>
        <Link to="/">Retournez sur la page d`accueil</Link>
      </div>
    </div>
  );
}

export default Error404;
