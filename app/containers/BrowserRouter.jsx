import React from "react";
import NoMatch from "./NoMatch"
import DashBoard from "./DashBoard"
import Courses from "./Courses"
import Course from "./Course"
import AddCourse from "./AddCourse"
import { Route,Switch} from "react-router-dom";

const BrowserRouter = () => (
    <Switch>
        <Route exact path="/" component={DashBoard } />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/course/:id" component={Course} />
        <Route path="/add-course" component={AddCourse} />
        <Route component={NoMatch}/>
    </Switch>
);
export default BrowserRouter;