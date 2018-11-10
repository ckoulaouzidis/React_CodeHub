import React from "react";
import { Link } from "react-router-dom";
import { Panel, Col } from "react-bootstrap";

const CourseListItem = ({ id, title, imagePath, price, dates, duration, open }) => {
  const { normal } = price;
  const { start_date, end_date} = dates;

  return (
    <Col xs={10} sm={8} md={6}>
      <Panel bsStyle="primary" className='list-item'>
        <Panel.Heading>
          <Panel.Title><h4>{ title }</h4></Panel.Title>
        </Panel.Heading>
        <Panel.Body className="no-padding">
          <Link to={`/course/${id}`}>
            <img src={imagePath} alt={`${title} course image`} className="img-responsive" />
          </Link>
          <div className="panel-info clearfix">
            <p>Price: <strong>{ normal }€</strong> | Bookable: <strong>{ open ? "YES" : "NO" }</strong></p>
            <p>Duration: <strong>{ duration }</strong></p>
            <p>Dates: <strong>{ start_date } - { end_date }</strong></p>
            <Link to={`/course/${id}`} className="btn btn-primary pull-right" >View</Link>&nbsp;
          </div>
        </Panel.Body>
      </Panel>
    </Col>
  );
};

export default CourseListItem;