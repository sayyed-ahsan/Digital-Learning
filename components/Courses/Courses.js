import Link from "next/link";
import {
    BsFillGrid3X3GapFill,
    BsFillStarFill,
    BsList,
    BsStar,
} from "react-icons/bs";
import { FaFilter, FaFolder } from "react-icons/fa";
const Courses = ({ allCourse }) => {
    return (
        <div>
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
                    <h3 className="text-lg font-semibold">
                        We found{" "}
                        <span className="text-accent font-bold">{allCourse.length}</span>{" "}
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
                <div className="lg:col-span-1 bg-primary text-white p-2 rounded-md max-h-96">
                    CATEGORIES
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:col-span-3 md:grid-cols-2 grid-cols-1 gap-5 p-2 rounded-md">
                    {allCourse.map((course) => {
                        return (
                            <div
                                key={course._id}
                                className="shadow-lg border border-slate-200"
                            >
                                <div className="relative">
                                    <a className="block relative h-48 overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={course.image}
                                        />
                                    </a>
                                    <p className="text-xl absolute right-2 text-white bottom-2 badge badge-secondary py-4 rounded-sm">
                                        ${course.price}
                                    </p>
                                </div>
                                <div className="my-4 px-5 py-3">
                                    <div className="flex justify-between items-center mx-2">
                                        <div className="text-lg inline p-1 rounded-md text-secondary border border-secondary">
                                            Category Name
                                        </div>
                                        <div className="flex items-center gap-2 font-bold text-amber-500 my-5">
                                            <span>{course.courseRating}</span>
                                            <div className="flex gap-1">
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsFillStarFill />
                                                <BsStar />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-gray-900  text-2xl font-semibold">
                                        {course.courseName}
                                    </h2>
                                    <p className="my-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                                        temporibus voluptatibus laudantium aliquid tempora nemo
                                        repellat minus cupiditate explicabo ipsum.
                                    </p>
                                    <Link
                                        href={`/course/${course._id}`}
                                        className="btn btn-secondary rounded-md btn-md text-white w-full"
                                    >
                                        Enroll Now
                                    </Link>
                                </div >
                            </div >
                        );
                    })}
                </div >
            </div >
        </div >
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
