import React from "react";

const Sidebar = (props) => {

const{handletoggleModel,data} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data.title}</h2>
        <div>
          <p>Description</p>
          <p>
            {data.explanation}
          </p>
        </div>
        <button onClick={handletoggleModel}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
