import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <banner>
        <div>
          <img src="./src/assets/LOGO.png" alt="" />
        </div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/">A Propos</Link>
        </nav>
      </banner>
      <body>
        <section className="image-section">
          <img className="mer" src="./src/assets/IMG.png" alt="" />
          <div>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </section>
        <section className="gallery"></section>
      </body>
    </div>
  );
}

export default Home;
