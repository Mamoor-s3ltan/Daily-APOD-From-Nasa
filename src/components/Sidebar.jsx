import React, { useState } from "react";

const Sidebar = (props) => {
  const { handletoggleModel, data } = props;
  const [isReadMore, setIsReadMore] = useState(true);

  const handleDescription = () => {
    if (isReadMore && data.explanation.length > 100) {
      return data.explanation.slice(0, 100) + "...";
    } else {
      return data.explanation;
    }
  };

  const handleReadToggle = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data.title}</h2>
        <div>
          <p>Description</p>
          <p className="paraDesc">{handleDescription()}</p>
          {data.explanation && (
            <span className="read" onClick={handleReadToggle} >
              {isReadMore ? "Read More..." : "Read Less"}
            </span>
          )}
        </div>
        <button onClick={handletoggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
