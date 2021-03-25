import React from "react";

const MainContent = (props) => {
  return (
    <>
        <div className="mainSection">
            <div className="contentHeader">
              <h3>{props.heading}</h3>
            </div>  
        </div> 
    </>
  );
}

export default MainContent;
