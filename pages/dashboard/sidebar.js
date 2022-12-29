import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100 text-base-content">
            <li>
              <Link href={"/dashboard/home"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/allcourses"}>Courses</Link>
            </li>
            <li>
              <Link href={"/dashboard/upload"}>Upload</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;