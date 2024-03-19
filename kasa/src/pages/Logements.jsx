import { useParams, useNavigate } from "react-router-dom";
import LogementsData from "../data/logements.json";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Carousel from "../components/Slideshow";

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = LogementsData.find((logement) => logement.id === id);

  if (!logement) {
    navigate("/Error404");
    return null;
  }

  return (
    <div className="logements">
      <Carousel images={logement.pictures} alt={logement.description} />{" "}
      <div className="logements_details">
        <div className="logements_info">
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
        <div className="logement_host">
          <div className="host_detail">
            <p className="host_text">{logement.host.name}</p>
            <img
              className="host_img"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="dropdown_details">
        <Collapse title={"Description"} content={logement.description} />
        <Collapse title={"Équipements"} content={logement.equipments} />
      </div>
    </div>
  );
};

export default LogementDetail;
