import React, { Component } from "react";
import CourseItem from "components/CourseItem";
import Header from "../components/Header";
import { Modal, Button } from "react-bootstrap";
import { Row, Col, Grid  } from 'react-bootstrap';
import { fetchCourse, fetchCourseInstructors, updateCourse, deleteCourse } from "../retreieveJsonData";

class Course extends Component {
  state = {
    course: null,
    courseInstructors: null,
    showDeleteModal: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    const course = await fetchCourse(match.params.id);
    console.log(course);
    const courseInstructors = await fetchCourseInstructors(course.instructors);
    this.setState({ course, courseInstructors });
  }

  handleDeleteCourse = async () => {
    const { course } = this.state;
    await deleteCourse(course.id);
  }

  toggleDeleteModal = () => {
    this.setState((prevState) => ({ showDeleteModal: !prevState.showDeleteModal }));
  }

  render() {
    const { course, courseInstructors, showDeleteModal } = this.state;
    return (<Grid>

        {
          course &&
            <Modal show={showDeleteModal} onHide={this.toggleDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{`Are you sure you want to delete "${course.title}" this course?`}</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.toggleDeleteModal}>Cancel</Button>
                <Button bsStyle="primary" onClick={this.handleDeleteCourse}>Delete</Button>
              </Modal.Footer>
            </Modal>
        } 

      <Row>
        <Col xs={12}>
          <Header/>
        </Col>
      </Row>

        {<Row>
        {
          course &&
          <CourseItem {...course}
              instructors={courseInstructors}
              handleDelete={this.toggleDeleteModal}
          />
        }
        </Row> }

      </Grid>
    );
  }
}

export default Course;
