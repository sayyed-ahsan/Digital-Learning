import Layout from "./layout";

import { HiOutlineUsers } from "react-icons/hi2";
import { BsPlusSquare } from "react-icons/bs";
import { RxLayers } from "react-icons/rx";

import { AiOutlineQuestion } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FiCheck } from "react-icons/fi";

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#FBF9F6] py-10 px-40  my-10">
        <div className=" md:flex justify-between ">
          <div className="mb-2">
            <h2 className="text-2xl text-black font-medium mb-1">Dashboard</h2>
            <p className="mt-2 text-sm text-gray-800">Welcome to Pathshala Dashboard</p>
          </div>

          <div className="text-sm breadcrumbs text-black ">
            <ul>
              <li><a>Home</a></li>
              <li><a>Dashboard</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">

          <div className="bg-[#F1416C] text-white  w-full md:max-w-xl ">

            <div className="m-4 ">
              <div className="flex items-center">
                <div className="bg-[#F1537A]  text-4xl p-3 rounded-md">
                  <HiOutlineUsers />
                </div>
                <div className="ml-4">
                  <h2 className="text-white text-base font-bold">Total students</h2>
                  <p className="text-3xl font-bold">5220</p>
                </div>


              </div>
              <div className="text-base font-bold mt-3">
                <h2> Free: 4240 students</h2>
              </div>
              <div className="text-base font-bold my-2">
                <h2> Paid: 980 Students</h2>
              </div>

              <progress className="progress progress-neutral  w-96" value="90" max="100"></progress>
            </div>

          </div>








          <div className="bg-[#FFFFFF] text-white  w-full md:max-w-xl ">

            <div className="m-4 ">
              <div className="flex items-center">
                <div className="bg-[#FFF4CC] text-amber-400  text-4xl p-3 rounded-md">
                  <BsPlusSquare />
                </div>
                <div className="ml-4">
                  <h2 className="text-[#A1A5B7] text-base font-bold">New Students</h2>
                  <p className="text-3xl font-bold text-black">1032</p>
                </div>


              </div>
              <div className="text-[#A1A5B7] font-bold mt-3">
                <h2> Free: 909 students</h2>
              </div>
              <div className="text-[#A1A5B7] font-bold my-2">
                <h2> Paid: 123 students</h2>
              </div>

              <progress className="progress progress-error w-96" value="80" max="100"></progress>
            </div>

          </div>














          <div className="bg-[#FFFFFF] text-white  w-full md:max-w-xl ">

            <div className="m-4 ">
              <div className="flex items-center">
                <div className="bg-[#FCD9E2] text-pink-600  text-4xl p-3 rounded-md">
                  <RxLayers />
                </div>
                <div className="ml-4">
                  <h2 className="text-[#A1A5B7] text-base font-bold">Total Courses</h2>
                  <p className="text-3xl font-bold text-black">1032</p>
                </div>


              </div>
              <div className="text-[#A1A5B7] font-bold mt-3">
                <h2> Free: 83 courses</h2>
              </div>
              <div className="text-[#A1A5B7] font-bold my-2">
                <h2> Paid: 26 courses</h2>
              </div>

              <progress className="progress progress-success w-96" value="60" max="100"></progress>
            </div>

          </div>



        </div>

        <div className="grid grid-cols-5 gap-5 mt-6">
          <div className=" col-span-5 lg:col-span-3 bg-[#FFFFFF] h-96">
            <h3 className="text-black text-2xl">Graph</h3>
          </div>

          <div className=" col-span-5 lg:col-span-2 bg-[#FFFFFF] h-96 ">
            <div className="flex justify-between m-5">
              <h2 className="text-slate-900 text-xl font-bold">Recent Notification</h2>
              <button className="bg-[#20D489] hover:bg-[#16b975] text-white font-medium px-3 py-1 rounded">View all</button>
            </div>

            <div className="flex justify-between items-center m-5">
              <div className="flex items-center">
                <div className="mr-3">
                  <RxCross1 className="bg-[#FCD9E2] text-pink-600  text-5xl  rounded-md p-3" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black">2FA verification failed</h2>
                  <p className="text-gray-600 font-semibold">020-11-04 12:00:23</p>
                </div>
              </div>

              <div className="text-green-400 font-medium">
                <h2>3 min ago</h2>
              </div>

            </div>
          </div>

        </div>




      </div>





    </Layout>
  );
};

export default Home;
