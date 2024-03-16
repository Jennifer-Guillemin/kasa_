import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeIMG from "../assets/LOGO.png";

function Banner() {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <div className="banner">
      <img src={HomeIMG} alt="" />
      <nav>
        <Link
          className={`no-style ${selected === "/" ? "selected" : ""}`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`no-style ${selected === "/apropos" ? "selected" : ""}`}
          to="/apropos"
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Banner;
