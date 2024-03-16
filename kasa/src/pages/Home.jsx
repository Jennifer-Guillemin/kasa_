import Logements from "../data/logements.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <section className="image-section">
          <img
            className="mer"
            src="./src/assets/borddemer.png"
            alt="Bord de mer"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </section>
        <section className="gallery">
          {Logements.map((logements) => (
            <Link
              to={`/logements/${logements.id}`}
              key={logements.id}
              className="card-link"
            >
              <div className="card">
                <img
                  className="img_logements"
                  src={logements.cover}
                  alt={logements.title}
                />
                <h2>{logements.title}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
