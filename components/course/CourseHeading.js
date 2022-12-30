import Link from 'next/link';
import React from 'react'
import { AiFillStar } from "react-icons/ai";

const CourseHeading = () => {
    return (
        <div className="hero bg-slate-500">
            <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
            <div className="hero-content py-16 text-left text-neutral-content">
                <div className="text-white">
                    <h1 className="mb-5 text-5xl font-bold">The Complete 2023 Web Development Bootcamp</h1>
                    <p className="py-2">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps</p>
                    <div className='flex items-center gap-2 text-xl text-orange-300'>
                        <span>4.7</span>
                        <div className='flex items-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className='text-white text-base flex items-center gap-3'>
                            <p>(248,175 ratings)</p>
                            <p>847,462 students</p>
                        </div>
                    </div>
                    <p className="my-1">Created by <Link className='underline text-orange-400' href='/'>Md Jasim</Link></p>
                    <p className="">Last updated 11/2022</p>
                </div>
            </div>
        </div>
    )
}

export default CourseHeading
