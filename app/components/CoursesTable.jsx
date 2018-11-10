import React from "react";
import { Link } from "react-router-dom";
import { Panel, Table } from "react-bootstrap";
import CourseTableItem from "components/CourseTableItem";

const CoursesTable = ({ title, data }) => (
  <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title><h4>{ title }</h4></Panel.Title>
    </Panel.Heading>
    <Panel.Body className="no-padding">
      <Table responsive striped bordered condensed hover className="no-margin">
        <thead>
          <tr>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((program) =>
              <CourseTableItem key={program.id} {...program} />)
          }
        </tbody>
      </Table>
      <Panel.Footer className="clearfix">
        <Link to="/courses" className="btn btn-primary pull-right">View All</Link>
      </Panel.Footer>
    </Panel.Body>
  </Panel>
);

export default CoursesTable;
