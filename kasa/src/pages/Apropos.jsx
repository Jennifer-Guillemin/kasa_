import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Apropos() {
  return (
    <div>
      <Banner />
      <img
        className="montagne"
        src="./src/assets/montagne.png"
        alt="La montagne"
      />
      <section className="apropos">
        <div className="dropdown">
          <p>Fiabilité</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Apropos;
