
import React from "react";
import Header from "../components/Header";
import MainJumbotron from "../components/MainJumbotron";

class DashBoard extends React.Component {
    constructor() {
      super();
    }




   
    render() {
      return (
         <div>
             <Header/>
            <MainJumbotron/>
         </div>
      );
    }
   }
   
   export default DashBoard;