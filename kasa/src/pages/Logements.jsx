import { useParams, useNavigate } from "react-router-dom";
import LogementsData from "../data/logements.json";

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
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div>
          <p className="tags">{logement.tags}</p>
        </div>
      </section>
      <div className="dropdown_details">
        <div className="collapse_details"></div>
        <div className="collapse_details"></div>
      </div>
    </div>
  );
};

export default LogementDetail;
