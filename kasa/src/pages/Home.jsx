import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <section className="image-section">
        <img
          className="mer"
          src="./src/assets/borddemer.png"
          alt="Bord de mer"
        />
        <div>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="gallery">
        <div className="card"></div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
