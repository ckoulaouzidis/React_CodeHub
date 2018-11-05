
import React from "react";
import Header from "../components/Header";
import { Row, Col, Grid , Image } from 'react-bootstrap';
import MainJumbotron from "../components/MainJumbotron";
import BadgePanel from "../components/BadgePanel";

class DashBoard extends React.Component {




   
    render() {
      return  <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Header/>
          </Col>
        </Row>
    
        <Row className="show-grid" justify="between">
          <Col xs={1} md={1}/>
          <Col xs={9} md={9}>
            <MainJumbotron/>
          </Col>
          <Col xs={1} md={1}/>
        </Row>
    
     
        <Row className="show-grid" justify="between">
          
          
          <Col xs={2} md={2}/>

          <Col xs={2} md={2}>
          <BadgePanel/>
          </Col>
          
          <Col xs={2} md={2}>
          <BadgePanel/>
          </Col>
          
          <Col xs={2} md={2}>
          <BadgePanel/>
          </Col>
          
          <Col xs={2} md={2}>
          <BadgePanel/>
          </Col>
          
          
          
        </Row>
      
        </Grid>;
    }
   }
   
   export default DashBoard;