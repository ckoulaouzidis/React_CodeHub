import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import BoxTile from /components/BoxTile;
import HeroTile from /components/HeroTile;



const MasterDiv=(props)=>{
  return(
      <>
        <HeroTile/>
        <BoxTile/> 
      </>
  );
}




ReactDOM.render(
  <MasterDiv/>,
  document.getElementById("app")
);
