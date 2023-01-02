import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillStar } from "react-icons/ai";
import { VscMortarBoard } from "react-icons/vsc";
import { BsBarChartLine, BsClock, BsFillFileTextFill, BsFillTrophyFill, BsFillCartFill, BsYoutube } from "react-icons/bs";
import ReactPlayer from 'react-player/lazy'



const CourseDetails = ({ singleCourse }) => {
    const router = useRouter();
    const id = router.query.courseId;
    const { title, subtitle, thumbnail } = singleCourse




    return (
        <div className='mb-10'>
            {/* single course top heading */}
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
            {/* single course body */}
            <div className='my-20 w-11/12 mx-auto lg:grid lg:grid-cols-3 flex flex-col-reverse text-black gap-10 relative'>
                {/* single course Left side */}
                <div className="col-span-2">
                    <h3 className="text-2xl font-semibold mb-4">Description</h3>
                    <div className="text-info text-lg flex flex-col gap-3">
                        <p>
                            How do consumers see your brand relative to your competitors? How
                            should a new product be positioned when it’s launched? Which customer
                            segments are most interested in our current offerings?
                        </p>
                        <p>
                            For these questions and many others, surveys remain the tried and true
                            method for gaining marketing insights.
                        </p>
                        <p>
                            From one-off customer satisfaction surveys to brand tracking surveys
                            that are administered on a continuous basis, they provide the
                            information that marketers need to understand how their products,
                            services and brands are seen by consumers.
                        </p>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">What you will learn</h3>
                    <ul className="list-disc list-inside flex flex-col gap-3 font-medium">
                        <li>Where Ever Home is –Is where we will be able to provide Service</li>
                        <li>
                            Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo
                        </li>
                        <li>
                            How should a new product be positioned when it’s launched? Which
                            customer segments
                        </li>
                        <li>Where Ever Home is –Is where we will be able to provide Service</li>
                    </ul>
                    <div className="my-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold mb-4">
                                Topics for this course
                            </h3>
                            <div className="text-base font-medium flex gap-3">
                                <span>9 Lessons</span>
                                <span>02h 40m 32s</span>
                            </div>
                        </div>
                        {/* course video section */}
                        <section className="">
                            <div className="container flex flex-col justify-center">
                                <div className="space-y-4 text-secondary">
                                    <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                                        <summary className="px-4 py-6 text-xl font-semibold">
                                            Introduction
                                        </summary>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                    </details>

                                    <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                                        <summary className="px-4 py-6 text-xl font-semibold">
                                            Frontend web Development
                                        </summary>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                    </details>

                                    <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                                        <summary className="px-4 py-6 text-xl font-semibold">
                                            Introduction to HTML
                                        </summary>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                        <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                                            <div className="flex gap-2 items-center">
                                                <BsYoutube />
                                                <span>What you will get In this Course</span>
                                            </div>
                                            <p>13:50</p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </section>
                        {/* course video section */}
                        <div className="my-10">
                            <h3 className="text-2xl font-semibold mb-4">About the instructor</h3>
                            <div className="border-2 border-neutral">
                                <div className="flex items-center gap-10 px-2 py-5">
                                    <div className="avatar">
                                        <div className="w-36 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                                            <span className="text-sm">General manager</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p>
                                                I've spent the last few years teaching people to program at
                                                2 different immersive bootcamps where I've helped hundreds
                                                of people become web developers and change their lives. My
                                                graduates work at companies like Google, Salesforce, and
                                                Square. I've helped hundreds of people become web developers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="py-4 px-2 flex items-center justify-between">
                                    <p className="flex items-center text-amber-500 font-semibold">
                                        <AiFillStar />
                                        <span>4.7 Instructor Rating</span>
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <p className="flex items-center  font-semibold">
                                            <VscMortarBoard />
                                            <span>20 Courses</span>
                                        </p>
                                        <p className="flex items-center font-semibold">
                                            <span>47568721 Students</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* single course Left side */}
                <div className='lg:absolute lg:right-0 lg:-top-52'>
                    <div className="bg-base-100 shadow-xl">
                        <img className='w-fit' src={thumbnail} alt="" />
                        {/* <div className='player-wrapper'>
                            <ReactPlayer
                                width='100%'
                                height='350px'
                                controls={true}
                                url='https://www.youtube.com/watch?v=v0ir_CwypVk' /></div>*/}
                        <div className='m-5'>
                            <h2 className="text-3xl font-bold">$84.99</h2>
                            {/* featured section */}
                            <div>
                                <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                                    <p className='flex items-center gap-2'>
                                        <BsBarChartLine />
                                        <span>Course level:</span>
                                    </p>
                                    <p>Beginner</p>
                                </div>
                                <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                                    <p className='flex items-center gap-2'>
                                        <BsClock />
                                        <span>Duration:</span>
                                    </p>
                                    <p>02h 40m 32s</p>
                                </div>
                                <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                                    <p className='flex items-center gap-2'>
                                        <BsFillFileTextFill />
                                        <span>articles:</span>
                                    </p>
                                    <p>Total 20</p>
                                </div>
                                <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                                    <p className='flex items-center gap-2'>
                                        <BsFillFileTextFill />
                                        <span> downloadable resources:</span>
                                    </p>
                                    <p>10</p>
                                </div>
                                <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                                    <p className='flex items-center gap-2'>
                                        <BsFillTrophyFill />
                                        <span>Certificate:</span>
                                    </p>
                                    <p>Available</p>
                                </div>
                            </div>

                            <div className="card-actions justify-end ">
                                <button className='my-10 flex btn btn-secondary text-white w-full uppercase font-bold rounded-full gap-1'>
                                    <BsFillCartFill />
                                    <span>Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { courseId } = context.query;
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/courses/${ courseId }`);
    const singleCourse = await res.json();
    // Pass data to the page via props
    return { props: { singleCourse } };
}



export default CourseDetails
