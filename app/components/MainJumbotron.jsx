import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class MainJumbotron extends React.Component {
    constructor() {
      super();
    }

render() {
    return (
            <Jumbotron>
                <h2>Welcome to Code.Hub Dashboard!</h2>
                <p>Manage everything and have fun!</p>
            </Jumbotron>
        );
    }
}
export default MainJumbotron;