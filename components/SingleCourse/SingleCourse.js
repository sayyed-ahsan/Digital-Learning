import React from 'react'

import CourseHeading from './CourseHeading';
import CourseLeftContent from './CourseLeftContent';


const SingleCourse = () => {
    return (
        <div className='my-20'>
            {/* single course top heading */}
            <CourseHeading />
            {/* single course body */}
            <div className='my-20 w-11/12 mx-auto grid lg:grid-cols-3 text-black gap-5'>
                {/* single course Left side */}
                <CourseLeftContent />
            </div>
        </div>
    )
}

export default SingleCourse
