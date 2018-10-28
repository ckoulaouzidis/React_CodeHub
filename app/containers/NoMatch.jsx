import React from 'react';
import { Row, Col, Grid , Image } from 'react-bootstrap';


import Header from "../components/Header";

class NoMatch extends React.Component {
    constructor() {
      super();
     
    }
   
    render() {
      return <Grid>
        <Row className="show-grid">
         <Col xs={12} md={12}>
        
         <Header/>
        
          </Col>
        </Row>
      
      
        
        <Row className="show-grid">
          <Col xs={2} md={8}/>
          <Col xs={8} md={8}>
            <Image src="../resourse/img/14-404.png" alt="404" rounded />
          </Col>
          <Col xs={2} md={8}/>
        </Row>
      
       
    </Grid>;
    }
   }
   
   export default NoMatch;