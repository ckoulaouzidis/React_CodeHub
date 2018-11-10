import React from "react";
import { PageHeader, Row, Col, Button } from "react-bootstrap";
import Instructor from "./Instructor";

const CourseItem = ({
  id, title, imagePath, price, dates, duration, open, description, instructors, handleDelete
}) => {
  const { normal } = price;
  const { start_date, end_date } = dates;
  const bgImage = {
    height: "250px",
    background: `url(${imagePath}) no-repeat top left`
  };

  return (
    <div>
      <PageHeader>{title} ({id})</PageHeader>
      <div style={bgImage}></div>
      <Row>
        <Col xs={6}>
          <h3>Price: { normal } €</h3>
          <h3>Bookable: { open ? "YES" : "NO" }</h3>
        </Col>
        <Col xs={6}>
          <h3 className="text-right">Duration: { duration }</h3>
          <h3 className="text-right">Dates: { start_date } - { end_date }</h3>
        </Col>
      </Row>
      <div className="lead m-top" dangerouslySetInnerHTML={{ __html: description }} />
      <Row> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </Row> 
      <div className="clearfix">
        <Button bsStyle="danger" bsSize="small " onClick={handleDelete}>Delete</Button>&nbsp;
      </div>
      <h2>Instructors</h2>
      {
        instructors.length > 0 ?
          instructors.map((instructor) =>
            <Instructor key={instructor.id} {...instructor} />) : "None"
      }
    </div>
  );
};

export default CourseItem;
