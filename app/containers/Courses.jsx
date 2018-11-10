import React, { Component } from "react";
import CourseListItem from "components/CourseListItem";
import { fetchCourses } from "../retreieveJsonData";
import { Row, Col, Grid, PageHeader } from 'react-bootstrap';
import Header from "../components/Header";

class Courses extends Component {
  state = {
    courses: null
  };

  async componentDidMount() {
    const courses = await fetchCourses();
    this.setState({ courses });
  }

  render() {
    const { courses } = this.state;

    return <Grid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <PageHeader>
          Courses
      </PageHeader>
      </Row>

      <Row>
        {
          courses
          && courses.map((course) =>
            <CourseListItem key={course.id} {...course} />)
        }
      </Row>
    </Grid>;
  }


}
export default Courses;
