import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Header from "../components/Header";

class AddCourse extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Grid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          Add New Course ... :)
    </Col>
      </Row>
    </Grid>;
  }
}

export default AddCourse;