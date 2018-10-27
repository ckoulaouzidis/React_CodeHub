import React from "react";
import NoMatch from "./NoMatch"
import DashBoard from "./DashBoard"
import Courses from "./Courses"
import AddCourse from "./AddCourse"

import ReactDOM from "react-dom";
import { Route,Switch, Link } from "react-router-dom";


const BrowserRouter = () => (
    
       <Switch>
            <Route exact path="/" component={DashBoard } />
            <Route path="/about" component={Courses} />
            <Route path="/company" component={AddCourse} />
            <Route component={NoMatch}/>
        </Switch>
   
 
);
   
   
export default BrowserRouter;