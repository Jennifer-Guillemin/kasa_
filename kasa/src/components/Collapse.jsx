import { useState } from "react";

function Collapse({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Collapse_container">
      <button
        className={`collapse ${isActive ? "active" : ""}`}
        onClick={toggleCollapse}
      >
        <p>{title}</p>
        <span className={`arrow ${isActive ? "open" : "closed"}`}>
          {isActive ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </button>
      <div
        className="content"
        style={{
          maxHeight: isActive ? "1000px" : "0",
          overflow: "hidden",
        }}
      >
        {content &&
          (Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          ))}
      </div>
    </div>
  );
}

export default Collapse;
