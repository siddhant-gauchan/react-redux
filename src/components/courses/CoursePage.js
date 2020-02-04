import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
class CoursePage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       course: {
  //         title: ""
  //       }
  //     };
  //     // this.handleChange = this.handleChange.bind(this);
  //   }

  // state = {
  //   course: {
  //     title: ""
  //   }
  // };

  //handlecChange(event)
  // handleChange = event => {
  //   //event.preventDefault();
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   //this.props.dispatch(courseActions.createCourse(this.state.course));
  //   //this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);
  //   //alert(this.state.course.title);
  // };
  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <h2>Courses</h2>
  //       <h3>Add Course</h3>
  //       <input
  //         type="text"
  //         //   onChange={this.handleChange.bind(this)}
  //         onChange={this.handleChange}
  //         value={this.state.course.title}
  //       />
  //       <input type="submit" value="Save" />
  //       {this.props.courses.map(course => (
  //         <div key={course.title}>{course.title}</div>
  //       ))}
  //     </form>
  //   );
  // }

  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("loading courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        {console.log(this.props.courses)}
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
    );
  }
}
CoursePage.propTypes = {
  //dispatch: propTypes.func.isRequired,
  courses: propTypes.array.isRequired,
  // createCourse: propTypes.array.isRequired
  actions: propTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    // createCourse: bindActionCreators(courseActions, dispatch)

    actions: bindActionCreators(courseActions, dispatch)
  };
}
// const mapDispatchToProps ={
//     crateCourse:courseActions.createCourse()
// }
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
