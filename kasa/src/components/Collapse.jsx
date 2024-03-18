import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse_container">
      <div className="collapse_title" onClick={toggleCollapse}>
        <p>{title}</p>
        <span className={`arrow ${isOpen ? "open" : "closed"}`}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>
      <div className={`collapse_content ${isOpen ? "open" : "closed"}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
