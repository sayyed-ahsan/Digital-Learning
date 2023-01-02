import Link from "next/link";
import React from "react";
import Dashboard from ".";

const publishBlog = () => {
  return (
    <Dashboard>
      <div>
        <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral text-black">
          {/* title section */}
          <div className="flex justify-center lg:justify-between gap-2">
            <div>
              <h2 className="text-xl lg:text-3xl font-semibold">
                Publish a New Blog
              </h2>
              <p className="py-2 mb-5 w-28 lg:w-full text-xs lg:text-base">
                Welcome to PathShala, Here is all of your Reviews.
              </p>
            </div>
            <div className="text-xs lg:text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/dashboardlayout/home"}>Dashboard</Link>
                </li>
                <li>Upload</li>
              </ul>
            </div>
          </div>
          {/* upload section */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    The quick, brown fox
                    <br className="hidden md:block" />
                    jumps over{" "}
                    <span className="relative px-1">
                      <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                      <span className="relative inline-block text-deep-purple-accent-400">
                        a lazy dog
                      </span>
                    </span>
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae. explicabo.
                  </p>
                </div>
                <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                  Features
                </p>
                <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      A slice of heaven
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Disrupt inspire
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Preliminary thinking
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Flipboard curmudgeon
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Storage shed
                    </li>
                    <li className="flex">
                      <span className="mr-1">
                        <svg
                          className="w-5 h-5 mt-px text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </span>
                      Satoshi Nakamoto
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src="https://brands-up.ch/public/images/uploads/97bc703442fa9a38ed92e3047355fb18486c1219.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <form>
                    <input type="text" name='' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" text='' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </form> */}
        {/* ------------------------------------ */}
        <section className="p-6 bg-neutral dark:text-gray-50">
          <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Personal Inormation</p>
                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">First name</label>
                  <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">Last name</label>
                  <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">Address</label>
                  <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">City</label>
                  <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state" className="text-sm">State / Province</label>
                  <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                  <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Profile</p>
                <p className="text-xs">Adipisci fuga autem eum!</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">Username</label>
                  <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">Website</label>
                  <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">Bio</label>
                  <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">Photo</label>
                  <div className="flex items-center space-x-2">
                    <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                    <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
        {/* ------------------------------------ */}
        <section></section>
      </div>
    </Dashboard>
  );
};

export default publishBlog;
