import React from 'react';
import { Panel,Badge } from 'react-bootstrap';



class BadgePanel extends React.Component {
    constructor() {
      super();
     
    }
   
    render() {
       return  <Panel>
              <Panel.Body>Basic <Badge pullRight='true' >42</Badge></Panel.Body>
            </Panel>
    }
   }
   
   export default BadgePanel;