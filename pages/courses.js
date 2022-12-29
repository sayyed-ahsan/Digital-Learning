import { useEffect, useState } from 'react';
import Courses from '../components/Courses/Courses';
import SingleCourse from '../components/SingleCourse/SingleCourse';

const courses = () => {


  const [allCourse, setAllCourse] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/allCourses')
      .then(res => res.json())
      .then(data => setAllCourse(data))
  }, [])

  return (
    <div>
      <Courses allCourse={allCourse} />
      <SingleCourse />
    </div>
  );
};




export default courses;

