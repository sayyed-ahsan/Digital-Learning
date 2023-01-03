import Link from "next/link";
import React, { use } from "react";
import Dashboard from ".";
import useAuth from '../../hook/useAuth'


const publishBlog = () => {
  const { user, loggedToken, setLoggedToken } = useAuth();
  const publisher_email = user.email;
  const publisher_name = user.name;
  const blog_publish_Date = new Date();
  console.log(user, publisher_name, publisher_email, blog_publish_Date)


  const publish_Blog = (event) => {
    event.preventDefault();
    const form = event.target;
    const publish_Date = blog_publish_Date;
    const pub_name = publisher_name;
    const pub_email = publisher_email;
    // const category = form.blogCategory.value;
    const blog_img = form.blogImage.value;
    const pub_img = form.Publisher_image.value;
    const blo_titel = form.titel.value;
    const blog_sub_titel = form.subTitel.value;
    const blog_detail = form.detail.value;


    const blogData = {
      publish_Date,
      // category,
      blog_img,
      pub_img,
      blo_titel,
      blog_sub_titel,
      blog_detail,
      pub_name,
      pub_email,
    };

    console.log(blogData);

    const url = 'http://localhost:3000/api/blog/publish_blog';

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.acknowledged) {
          //toast here
          console.log('publish blog successfully');

        }
        console.log(data)
      })
      .catch(err => console.log(err))

  };


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
        <section className="p-10 bg-neutral dark:text-gray-50">
          <div className="">
            <div className="mx-auto max-w-[800px] p-8 space-y-3 shadow-lg  bg-gray-200 dark:text-gray-100">
              <h1 className="text-2xl font-bold text-cente">Publish a New Blog</h1>

              <form onSubmit={publish_Blog} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Date</label>
                  <input type="date" name="date" id="date" placeholder={blog_publish_Date} className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Select Category</label>
                  <select className="select select-success w-full name='blogCategory' ">
                    <option disabled selected>Pick your categories</option>
                    <option>Marketing</option>
                    <option>IT & Software</option>
                    <option>Business</option>
                  </select>
                </div>
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Blog Image Url</label>
                  <input type="text" name="blogImage" id="blogImage" placeholder="Image" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Your profile Image Url</label>
                  <input type="text" name="Publisher_image" id="Publisher_image" placeholder="Image" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Titel</label>
                  <input type="text" name="titel" id="titel" placeholder="" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Sub Titel</label>
                  <input type="text" name="subTitel" id="subTitel" placeholder="" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Image Url</label>
                  <input type="text" name="image" id="image" placeholder="Image" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                {/* ----------------- */}
                <div className="space-y-1 text-sm">
                  <label for="password" className="block dark:text-gray-400">Explain your detail</label>
                  <input type="text" name="detail" id="detail" placeholder="" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                  <div className="flex justify-end text-xs dark:text-gray-400">
                  </div>
                </div>
                {/* ----------------- */}
                <button className="btn btn-outline w-full btn-accent">Publish Blog</button>
              </form>

            </div>
          </div>
        </section>
        {/* ------------------------------------ */}
        <section></section>
      </div>
    </Dashboard>
  );
};

export default publishBlog;
