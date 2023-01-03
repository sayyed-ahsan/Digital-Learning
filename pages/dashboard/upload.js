import Link from "next/link";
import { useState } from "react";
import Dashboard from "./index";

const Upload = () => {

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const courseThumbnail = form.courseThumbnail.value;
    const courseTitle = form.courseTitle.value;
    const courseDescription = form.courseDescription.value;
    const coursePrice = form.coursePrice.value;
    const courseCategory = form.courseCategory.value;
    const courseSubCategory = form.courseSubCategory.value;
    const courseDificultyLevel = form.courseDificultyLevel.value;
    const courseTags = form.courseTags.value;
    const learnersAccessibility = form.learnersAccessibility.value;
    const videoThumbnail = form.videoThumbnail.value;
    const lessonName = form.lessonName.value;
    const lessonDescription = form.lessonDescription.value;

    const courseData = {
      courseThumbnail,
      courseTitle,
      courseDescription,
      coursePrice,
      courseCategory,
      courseSubCategory,
      courseDificultyLevel,
      courseTags,
      learnersAccessibility,
      videoThumbnail,
      lessonName,
      lessonDescription
    };

    console.log(courseData);

    const url = 'http://localhost:3000/api/courses/uploadcourse';

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then(response => response.json())
      .then(data => {
        if(data.acknowledged){
          //toast here
          console.log('uploaded successfully');

        }
        console.log(data)
      })
      .catch(err => console.log(err))

  };


  return (
    <Dashboard>
      <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral text-black">
        {/* title section */}
        <div className="flex justify-center lg:justify-between gap-2">
          <div>
            <h2 className="text-xl lg:text-3xl font-semibold">Upload</h2>
            <p className="py-2 mb-5 w-28 lg:w-full text-xs lg:text-base">
              Welcome to PathShala Upload page
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
        <div className="bg-white py-10 px-5 lg:px-40">
          <form onSubmit={handleAddProduct}>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Thumbnail</p>
              <input type="text"
                placeholder="Type the url of thumbnail"
                name="courseThumbnail"
                className="input input-bordered focus:outline-secondary w-full" />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Title</p>
              <input
                type="text"
                placeholder="Type here"
                name="courseTitle"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Description</p>
              <input
                type="text"
                placeholder="Type here"
                name="courseDescription"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Price</p>
              <input
                type="text"
                placeholder="Type here"
                name="coursePrice"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7 ">
              <p className="font-semibold w-64">Course Category</p>
              <select className="select select-bordered w-1/2" name='courseCategory'>
                <option disabled selected>
                  Select a category
                </option>
                <option value='JavaScript'>Java Script</option>
                <option value='ReactJS'>React Js</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Sub-category</p>
              <input
                type="text"
                placeholder="Type here"
                name="courseSubCategory"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Dificulty Level</p>
              <select className="select select-bordered w-1/2" name="courseDificultyLevel">
                <option disabled selected>
                  Select a category
                </option>
                <option value='Beginner'>Beginner</option>
                <option value='Basic'>Basic</option>
                <option value='Advance'>Advance</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Features</p>
              <input
                type="text"
                placeholder="Type here"
                name="courseFeatures"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Tags</p>
              <input
                type="text"
                placeholder="Type here"
                name="courseTags"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Learner's Accessibility</p>
              <select className="select select-bordered w-1/2" name="learnersAccessibility">
                <option disabled selected>
                  Select an access type
                </option>
                <option value='Public'>Public</option>
                <option value='Private'>Private</option>
                <option value='Premium'>Premium</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Lesson Video</p>
              <input
                type="file"

                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Video Thumbnail</p>
              <input
                type="text"
                name="videoThumbnail"
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Lesson Name</p>
              <input
                type="text"
                placeholder="Type here"
                name="lessonName"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Lesson Description</p>
              <textarea
                className="textarea textarea-bordered focus:outline-secondary w-full h-40"
                placeholder="Description"
                name="lessonDescription"
              ></textarea>
            </div>
            <div className="ml-12 lg:ml-[210px] flex gap-5">
              <button className="btn btn-secondary text-white">Submit</button>
              {/* <button className="btn btn-error">Cancel</button> */}
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default Upload;
