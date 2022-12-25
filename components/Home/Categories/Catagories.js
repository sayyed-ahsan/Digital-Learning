import React from 'react';
import Catagory from './Catagory/Catagory';

const Catagories = ({catagories}) => {
    return (
        <div>
           <h1 className='  text-gray-900 font-extrabold text-4xl mt-6 text-center mb-6  '>Our Featured Courses Updated</h1> <hr />
           <div className='max-w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-8'>
                {
                    catagories.map(catagory => <Catagory catagory={catagory} key={catagory.id}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;