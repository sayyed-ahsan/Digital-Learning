import Courses from '../components/Courses/Courses';
import Navber from "../components/Home/Navbar/Navbar";
import SingleCourse from '../components/SingleCourse/SingleCourse';

const courses = () => {
  return (
    <div>
      <Navber></Navber>
      <Courses />
      <SingleCourse />
    </div>
  );
};

export default courses;

