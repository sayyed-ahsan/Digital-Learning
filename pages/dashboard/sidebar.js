import Link from "next/link";
import useAuth from '../../hook/useAuth'
const Sidebar = () => {

  const { user, loggedToken, setLoggedToken } = useAuth();

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlhtmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlhtmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100 text-base-content">
            {
              user._id ?
                <>
                  <li>
                    <div className="flex items-center p-2 space-x-4">
                      <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                      <div>
                        {/* <h2 className="text-lg font-semibold">Md Jakir</h2> */}
                        <span className="flex items-center space-x-1">

                          <li className="pr-2 text-xs dark:text-gray-400">
                            <Link href={"/dashboard/viewprofile"}>View</Link>
                          </li>
                        </span>
                      </div>
                    </div>
                  </li>
                </>
                :
                <>

                </>
            }

            <li>
              <Link href={"/dashboard/allcourses"}>All Courses</Link>
            </li>
            <li>
              <Link href={"/dashboard/all_instractors"}>All Instractors</Link>
            </li>
            <li>
              <Link href={"/dashboard/allStudents"}>All Students</Link>
            </li>
            <li>
              <Link href={"/dashboard/allBlogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/dashboard/myStudents"}>My Students</Link>
            </li>
            <li>
              <Link href={"/dashboard/upload"}>Upload Course</Link>
            </li>
            <li>
              <Link href={"/dashboard/myBlogs"}>My Blogs</Link>
            </li>
            <li>
              <Link href={"/dashboard/myCourses"}>My Course</Link>
            </li>
            <li>
              <Link href={"/dashboard/publishBlog"}>Publish Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


