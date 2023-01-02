import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { BsFillGrid3X3GapFill, BsFillStarFill, BsList, BsStar } from "react-icons/bs";
import { FaFilter, FaFolder } from "react-icons/fa";


const index = ({ allCourses }) => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/api/categories/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])





    return (
        <div className='mb-10'>
            {/* Course heading */}
            <div
                className="hero"
                style={{ backgroundImage: `url("page-title.webp")` }}
            >
                <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
                <div className="hero-content py-10 text-left text-neutral-content">
                    <div className="max-w-md text-white">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <a href="/">
                                        <FaFolder />
                                        <span className="ml-2">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <FaFolder />
                                    <span className="ml-2">Courses</span>
                                </li>
                            </ul>
                        </div>
                        <h1 className="mb-5 text-5xl font-bold">Courses</h1>
                    </div>
                </div>
            </div>
            {/* Course Search bar */}
            <div className="text-info lg:my-20 w-11/12 mx-auto flex lg:flex-row md:flex-row flex-col gap-5 lg:gap-0 md:gap-0 justify-between items-center bg-neutral px-2 py-3 rounded-lg">
                <div>
                    <h3 className="text-lg font-semibold">We found<span className="text-accent font-bold mx-1">{allCourses.length}</span>
                        courses available for you
                    </h3>
                </div>
                <div className="flex items-center gap-3 font-semibold">
                    <div className="flex items-center gap-3">
                        <h4>See</h4>
                        <BsFillGrid3X3GapFill />
                        <BsList />
                    </div>
                    <div
                        tabIndex={0}
                        className="collapse collapse-arrow bg-primary text-white rounded-lg"
                    >
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex items-center">
                            <FaFilter />
                            <h4 className="ml-2">Filters</h4>
                        </div>
                        <div className="collapse-content bg-black">
                            <p>tabIndex</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Course Search bar */}
            <div className="text-black mx-auto w-11/12 grid lg:grid-cols-4 gap-5">
                <div className="lg:col-span-1 shadow-lg text-white p-2 rounded-md max-h-96">
                    <h3 className='text-center font-semibold text-black mb-2'>Top Catagories</h3>

                    {categories.map(category => {
                        return <div key={category._id} className="py-1">
                            <input type="radio" name="DeliveryOption" value="DeliveryStandard" id="DeliveryStandard" className="peer hidden"
                            /><label htmlFor="DeliveryStandard" className="flex cursor-pointer items-center rounded-lg border border-gray-100 p-2 text-sm font-medium shadow-sm hover:border-secondary peer-checked:border-secondary peer-checked:ring-1 peer-checked:ring-secondary"
                            >
                                <p className="text-gray-700 font-semibold">{category.category_name}</p>
                            </label>
                        </div>
                    })
                    }
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:col-span-3 md:grid-cols-2 grid-cols-1 gap-5 p-2 rounded-md">
                    {allCourses.map((course) => {
                        const { _id, price, subtitle, title, id, thumbnail, details, category } = course
                        return (
                            <div
                                key={_id}
                                className="shadow-lg border border-slate-200"
                            >
                                <div className="relative">
                                    <a className="block relative h-48 overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={thumbnail}
                                        />
                                    </a>
                                    <p className="text-xl absolute right-2 text-white bottom-2 badge badge-secondary py-4 rounded-sm">
                                        ${price}
                                    </p>
                                </div>
                                <div className="my-4 px-5 py-3">
                                    <div className="flex justify-between items-center mx-2">
                                        <div className="inline p-1 rounded-md text-secondary border border-secondary capitalize">
                                            {category}
                                        </div>
                                        <div className="flex items-center gap-2 font-bold text-amber-500 my-5">
                                            <span>{details[0].rating}</span>
                                            <div className="flex gap-1">
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsStar />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-gray-900  text-xl font-semibold">
                                        {title}
                                    </h2>
                                    <p className="my-5">
                                        {subtitle}
                                    </p>
                                    <Link href={`/courses/${ _id }`} className="btn btn-secondary rounded-md btn-md text-white w-full"
                                    >
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/courses');
    const allCourses = await res.json();

    // Pass data to the page via props
    return { props: { allCourses } };
}


export default index
