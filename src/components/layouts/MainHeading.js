import React from "react";

const MainHeading = (props) => {
  return (
    <>
      <div className="contentHeader">
        <h3>{props.heading}</h3>
      </div>  
    </>
  );
}

export default MainHeading;
