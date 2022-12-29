import Dashboard from "./index";
import { BsArrowRightShort } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";

const AllCourses = () => {
  return (
    <Dashboard>
      <div className="bg-[#FBF9F6] py-10 px-40  mt-10 ">
        <div className=" md:flex justify-between ">
          <div className="">
            <h2 className="text-2xl text-black font-medium">Courses</h2>
            <p className="mt-2 text-sm text-gray-800">
              Welcome to Pathshala Courses
            </p>
          </div>

          <div className="text-sm breadcrumbs text-black ">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="">
                  {/* <!--Card 1--> */}
                  <div class="w-full rounded overflow-hidden shadow-lg">
                    <img
                      class="w-full"
                      src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-black">
                        Python Bootcamp Zero to Hero
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, Nonea! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <button class="inline-block bg-green-500 rounded px-3 py-1 text-sm font-normal text-gray-50 mr-2 mb-2">
                        Edit
                      </button>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div class="">
                  {/* <!--Card 1--> */}
                  <div class=" rounded overflow-hidden shadow-lg">
                    <img
                      class="w-full"
                      src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXJzZSUyMGluJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-black">
                        Amazon Web Services Certification
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, Nonea! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <button class="inline-block bg-green-500 rounded px-3 py-1 text-sm font-normal text-gray-50 mr-2 mb-2">
                        Edit
                      </button>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div class="">
                  {/* <!--Card 1--> */}
                  <div class=" rounded overflow-hidden shadow-lg">
                    <img
                      class="w-full"
                      src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvdXJzZSUyMGluJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-black">
                        Data Science Exercises Included.
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, Nonea! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <button class="inline-block bg-green-500 rounded px-3 py-1 text-sm font-normal text-gray-50 mr-2 mb-2">
                        Edit
                      </button>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div class="">
                  {/* <!--Card 1--> */}
                  <div class=" rounded overflow-hidden shadow-lg">
                    <img
                      class="w-full"
                      src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZSUyMGluJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2 text-black">
                        The Web Developer Bootcamp
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, Nonea! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <button class="inline-block bg-green-500 rounded px-3 py-1 text-sm font-normal text-gray-50 mr-2 mb-2">
                        Edit
                      </button>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center px-6">
                <h2 className="text-black font-bold text-xl">
                  Group Discussions
                </h2>

                <div className="text-green-400 font-bold text-base flex items-center">
                  <p>Create Group </p>
                  <BsArrowRightShort />
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <FaHtml5 className="text-6xl text-orange-500" />
                  </div>

                  <div className="text-black">
                    <h1 className="text-xl font-medium">HTML 5</h1>
                    <p>Design</p>
                  </div>
                </div>

                <div className="text-red-500 font-bold">
                  <h5>158K+</h5>
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <FaCss3Alt className="text-6xl text-cyan-600" />
                  </div>

                  <div className="text-black">
                    <h1 className="text-xl font-medium">CSS3</h1>
                    <p>Design</p>
                  </div>
                </div>

                <div className="text-fuchsia-500 font-bold">
                  <h5>315K+</h5>
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <IoLogoJavascript className="text-6xl text-yellow-500" />
                  </div>

                  <div className="text-black">
                    <h1 className="text-xl font-medium">Javascript</h1>
                    <p>Design</p>
                  </div>
                </div>

                <div className="text-yellow-400 font-bold">
                  <h5>194K+</h5>
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <IoLogoReact className="text-6xl text-blue-300" />
                  </div>

                  <div className="text-black">
                    <h1 className="text-xl font-medium">React Js</h1>
                    <p>Design</p>
                  </div>
                </div>

                <div className="text-cyan-500 font-bold">
                  <h5>225K+</h5>
                </div>
              </div>

              <div className="px-6 mt-10">
                <h2 className="text-black font-bold text-xl">
                  Top Performance Courses
                </h2>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <img
                      src="https://edunet.vercel.app/images/courses/18.jpg"
                      alt=""
                      className="w-20 h-13"
                    />
                  </div>

                  <div className="text-black">
                    <h1 className="text-base font-medium">Python OOP</h1>
                    <p className="text-gray-900">Development</p>
                  </div>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <img
                      src="https://edunet.vercel.app/images/courses/15.jpg"
                      alt=""
                      className="w-20 h-13"
                    />
                  </div>

                  <div className="text-black">
                    <h1 className="text-base font-medium">React Js</h1>
                    <p>Development</p>
                  </div>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>

              <div className="h-20 bg-[#FFFFFF] w-[95%] mx-auto flex justify-between px-2 mt-4 items-center">
                <div className="flex p-3 space-x-2">
                  <div>
                    <img
                      src="https://edunet.vercel.app/images/courses/16.jpg"
                      alt=""
                      className="w-20 h-13"
                    />
                  </div>

                  <div className="text-black">
                    <h1 className="text-base font-medium">
                      Javascript Bootcamp
                    </h1>
                    <p>Development</p>
                  </div>
                </div>

                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      ;
    </Dashboard>
  );
};

export default AllCourses;
