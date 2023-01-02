import Link from "next/link";
import useAuth from "../../hook/useAuth";
import { useRouter } from "next/router";


const Navbar = () => {
  const { user, setLoggedToken, setUser } = useAuth();


  const handleLogout = () => {
    localStorage.removeItem("dl-token");
    setLoggedToken({});
    setUser({});
  };

  return (
    <header className='text-black'>
      <div className="navbar bg-base-100 font-semibold w-11/12 mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <img className='w-24' src='pathshala-logo.png' alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user._id ?
            <div className='flex gap-3 items-center dropdown dropdown-bottom dropdown-end'>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-xl">{user?.name.slice(0, 2)}</span>
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className='list-none'><button className='select-none btn-disabled'>{user?.name}</button></li>
                <li><button className="justify-between">Profile</button></li>
                <li className='list-none'><button onClick={handleLogout} className="btn btn-md rounded-md btn-outline btn-primary">Logout</button></li>
              </ul>
            </div>
            :
            <Link className='btn btn-secondary btn-sm lg:btn-md text-sm lg:text-xl text-white' href="/login">Login</Link>
          }
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


/*

  <div className="navbar bg-transparent font-semibold p-0 w-11/12 mx-auto text-black">
        <div className="navbar-start">
          <h3 className="text-2xl font-extrabold uppercase">
            <Link href="/">PathShala</Link>
          </h3>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-3">
              <li
                className={`${
                  router.asPath === "/" ? "bg-primary text-white rounded" : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${
                  router.asPath === "/courses"
                    ? "bg-primary text-white rounded"
                    : ""
                }`}
              >
                <Link href="/courses">Courses</Link>
              </li>
              <li
                className={`${
                  router.asPath === "/blog"
                    ? "bg-primary text-white rounded"
                    : ""
                }`}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={`${
                  router.asPath === "/about"
                    ? "bg-primary text-white rounded"
                    : ""
                }`}
              >
                <Link href="/about">About Us</Link>
              </li>
              <li
                className={`${
                  router.asPath === "/contactus"
                    ? "bg-primary text-white rounded"
                    : ""
                }`}
              >
                <Link href="/contactus">Contact Us</Link>
              </li>
              <li
                className={`${
                  router.asPath === "/dashboard/home"
                    ? "bg-primary text-white rounded"
                    : ""
                }`}
              >
                <Link href="/dashboard/home">Dashboard</Link>
              </li>
              {user._id ? (
                <li>
                  <div className="dropdown dropdown-end ">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar online placeholder"
                    >
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span className="text-xl">
                          {user?.name.slice(0, 2)}
                        </span>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-56 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-max"
                    >
                      <li>
                        <div className="justify-between">{user?.name}</div>
                      </li>
                      <li>
                        <button className="justify-between">Profile</button>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  className={`${
                    router.asPath === "/login"
                      ? "bg-primary text-white rounded"
                      : ""
                  }`}
                >
                  <Link href="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link href="/dashboard/home">Dashboard</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>














*/
