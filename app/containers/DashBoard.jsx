
import React from "react";
import Header from "../components/Header";
import { Row, Col, Grid } from 'react-bootstrap';
import MainJumbotron from "../components/MainJumbotron";
import Tiles from "../components/Tiles";
import CoursesTable from "components/CoursesTable";
import { fetchStats, fetchCourses } from "../retreieveJsonData";

class DashBoard extends React.Component {
  state = {
    stats: null,
    courses: null
  };

  async componentDidMount() {
    const [stats, courses] = await Promise.all([fetchStats(), fetchCourses()]);
    this.setState({ stats, courses });
  }

  render() {
    const { stats, courses } = this.state;
    const lastFiveCourses = courses ? courses.slice(0, 5) : [];

    return <Grid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col xs={1} md={1} />
        <Col xs={9} md={9}>
          <MainJumbotron />
        </Col>
        <Col xs={1} md={1} />
      </Row>

      <Row>
        <Col xs={1} md={1} />
        <Col xs={9} md={9}>
          {
            stats && stats.map(({ id, ...rest }) =>
              <Col key={id} xs={12} sm={6} md={3}>
                <Tiles {...rest} />
              </Col>
            )
          }
        </Col>
      </Row>

      {
        <Row>
          <Col xs={1} md={1} />
          <Col xs={9} md={9}>
            {
              courses &&
              <CoursesTable title="Last 5 Courses" data={lastFiveCourses} />
            }
          </Col>
        </Row>
      }

    </Grid>;
  }
}

export default DashBoard;