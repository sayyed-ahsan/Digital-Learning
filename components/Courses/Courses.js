

const Courses = ({ allCourse }) => {



    return (
        <div>
            {/* Course heading */}
            <div className="hero" style={{ backgroundImage: `url("page-title.webp")` }}>
                <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
                <div className="hero-content py-10 text-left text-neutral-content">
                    <div className="max-w-md text-white">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Home
                                    </a>
                                </li>
                                <li>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Courses

                                </li>
                            </ul>
                        </div>
                        <h1 className="mb-5 text-5xl font-bold">Courses</h1>
                    </div>
                </div>
            </div>
            {/* Course Search bar */}
            <div className='text-info lg:my-20 w-11/12 mx-auto flex lg:flex-row md:flex-row flex-col gap-5 lg:gap-0 md:gap-0 justify-between items-center bg-neutral px-2 py-3 rounded-lg'>
                <div>
                    <h3 className='text-lg font-semibold'>We found  <span className='text-accent font-bold'>{allCourse.lenth}</span> courses available for you</h3>
                </div>
                <div className='flex items-center gap-3 font-semibold'>
                    <div className='flex items-center gap-3'>
                        <h4>See</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-primary text-white rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                            </svg>
                            <h4>Filters</h4>
                        </div>
                        <div className="collapse-content bg-black">
                            <p>tabIndex</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Course Search bar */}
            <div className='text-black mx-auto w-11/12 grid lg:grid-cols-4 gap-5'>
                <div className='lg:col-span-1 bg-primary text-white p-2 rounded-md max-h-96'>
                    CATEGORIES
                </div>
                <div className='lg:col-span-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 p-2 rounded-md'>
                    {
                        allCourse.map(course => {
                            return <div key={course._id} className='shadow-lg border border-slate-200'>
                                <a className="block relative h-48 overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={course.image} />
                                </a>
                                <div className="mt-4 px-2 py-3">
                                    <span className="bg-slate-200 px-2 py-1 font-normal rounded-sm text-secondary mb-1">CATEGORY</span>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{course?.courseName}</h2>
                                    <p>{course?.courseDescription}</p>
                                    <p className="mt-1">${course.price}</p>
                                    <div>
                                        <span>{course.courseRating}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>

                                    </div>
                                    <button>Add To Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Courses;

// ----------------
// export async function getServerSideProps() {
//     try {
//         let response = await fetch('http://localhost:3000/api/allCorses');
//         let posts = await response.json();
//         console.log(posts)
//         return {
//             props: { posts: JSON.parse(JSON.stringify(posts)) },
//         };
//     } catch (e) {
//         console.error(e);
//     }
// }



