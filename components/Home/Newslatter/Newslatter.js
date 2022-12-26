import React from 'react';

const Newslatter = () => {
    return (
        <div className='h-44 flex flex-col space-y-5 justify-center items-center bg-[#F9FAFE] p-3'>
            <h3 className='text-base md:text-lg lg:text-xl font-bold text-black'>Subscribe Newslatter</h3>

            <form className='bg-white border-2 border-gray-200 w-1/2 shadow-lg  text-base'>
                <input type="email" placeholder='Enter Your Email' className='bg-white w-full outline-none px-2 text-black text-xs pb-2' />
            </form>

            <button className='bg-[#EA873A] text-white w-32 lg:w-36 text-sm py-1 rounded-full'>Subscribe</button>
        </div>
    );
};

export default Newslatter;
