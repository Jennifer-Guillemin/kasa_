import Collapse from "../components/Collapse";
import aboutList from "../data/aboutList.json";

function Apropos() {
  return (
    <div>
      <div className="dropdown_apropos">
        <img
          className="montagne"
          src="./src/assets/montagne.png"
          alt="La montagne"
        />
        <section className="apropos">
          {aboutList.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Apropos;
