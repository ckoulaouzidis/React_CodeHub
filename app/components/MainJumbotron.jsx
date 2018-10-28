import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class MainJumbotron extends React.Component {
    constructor() {
      super();
     
    }
   
    render() {
        return <Jumbotron>
                <h3>Welcome to Code.Hub Dashboard</h3>
                    <p>
                    Manage everything and have fun!
                    </p>
         
            </Jumbotron>
        }
   }
   
   export default MainJumbotron;