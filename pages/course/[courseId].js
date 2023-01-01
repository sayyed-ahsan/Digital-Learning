import React from 'react'
import Course from '../../components/course/SingleCourse';


const CourseDetails = () => {
    return (
        <div>
            <Course />
        </div>
    )
}

export default CourseDetails
export async function getServerSideProps() {
    try {
        let response = await fetch('http://localhost:3000/api/courses');
        let posts = await response.json();
        return {
            props: { posts: JSON.parse(JSON.stringify(posts)) },
        };
    } catch (e) {
        console.error(e);
    }
}
