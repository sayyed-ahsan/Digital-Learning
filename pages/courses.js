import { useEffect, useState } from 'react';
import Courses from '../components/Courses/Courses';

const courses = () => {
  const [allCourse, setAllCourse] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(res => res.json())
      .then(data => setAllCourse(data))
  }, [])

  return (
    <div>
      <Courses allCourse={allCourse} />
    </div>
  );
};




export default courses;

