import Link from "next/link";
import { useState } from "react";
import Dashboard from "./index";

const Upload = () => {

  const [courseThumbnail, setCourseThumbnail] = useState();
  const [videoThumbnail, setVideoThumbnail] = useState();
  const imageHostKey = 'daca22f0c17c23df6ad52e1276d485e8';

  const changeHandler = (event) => {
    setCourseThumbnail(event.target.files[0]);
  };

  const changeHandler2 = (event) => {
    setVideoThumbnail(event.target.files[0]);
  };

  const handleAddProduct = event => {
    // console.log(courseThumbnail)
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();
    formData.append('courseThumbnail', courseThumbnail);
    console.log(formData)
    // formData.append('videoThumbnail', videoThumbnail);
    console.log('adding product')
    // setLoading(true);
    // upload to imgbb -> eto slow ken bhai
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData)
      })
      .catch(err => console.log(err))
  }


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
              <input
                type="file"
                onChange={changeHandler}
                name="courseThumbnail"
                className="file-input file-input-bordered file-input-primary w-full"
              />
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
                type="file"
                onChange={changeHandler2}
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
