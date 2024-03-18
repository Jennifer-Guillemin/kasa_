import { useParams, useNavigate } from "react-router-dom";
import LogementsData from "../data/logements.json";
import Collapse from "../components/Collapse";

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = LogementsData.find((logement) => logement.id === id);

  if (!logement) {
    navigate("/Error404");
    return null;
  }

  return (
    <div>
      <section className="img_section">
        <img className="img_detail" src={logement.cover} alt={logement.title} />
      </section>
      <section className="section_details">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="div_tags">
            {logement.tags.map((tag, index) => (
              <p key={index} className="tags">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="host_rating">
          <h2>{logement.host.name}</h2>
          <img
            className="host_img"
            src={logement.host.picture}
            alt={logement.host.name}
          />
          <p>{logement.rating}</p>
        </div>
      </section>

      <div className="dropdown_details">
        <div className="collapse_details">
          <Collapse title={"Description"} content={logement.description} />
        </div>
        <div className="collapse_details">
          <Collapse title={"Équipements"} content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementDetail;
