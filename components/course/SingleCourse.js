import React from 'react'
import CourseHeading from './CourseHeading';
import CourseLeftContent from './CourseLeftContent';
import CourseRightContent from './CourseRightContent';


const Course = () => {
    return (
        <div className='mb-10'>
            {/* single course top heading */}
            <CourseHeading />
            {/* single course body */}
            <div className='my-20 w-11/12 mx-auto lg:grid lg:grid-cols-3 flex flex-col-reverse text-black gap-10 relative'>
                {/* single course Left side */}
                <CourseLeftContent />
                <CourseRightContent />
            </div>
        </div>
    )
}

export default Course
