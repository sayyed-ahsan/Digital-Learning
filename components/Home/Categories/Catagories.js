import React from 'react';
import Catagory from './Catagory/Catagory';

const Catagories = ({ catagories }) => {
    return (
        <div>
<<<<<<< HEAD
         <div className='w-9/12 mx-auto'>
         <h1 className='  text-gray-900 font-extrabold text-4xl mt-6 text-center mb-6'>Our Featured Courses </h1> <hr /> 
         </div>
           <div className='max-w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-8'>
=======
            <h1 className='  text-gray-900 font-extrabold text-4xl mt-6 text-center mb-6  '>Our Featured Courses Updated</h1> <hr />
            <div className='max-w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-8'>
>>>>>>> 8557105f7940537888a69b0314983e1807655660
                {
                    catagories.map(catagory => <Catagory catagory={catagory} key={catagory._id}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;
