import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.state = {
    //   course: { title: "" }
    // };
    //
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render () {
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
        {/*<h2>Add Course</h2>*/}
        {/*<input */}
          {/*type="text"*/}
          {/*onChange={this.onTitleChange}*/}
          {/*value={this.state.course.title}/>*/}
        {/*<input */}
          {/*type="submit"*/}
          {/*onClick={this.onClickSave}*/}
          {/*value="Save"/>*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
