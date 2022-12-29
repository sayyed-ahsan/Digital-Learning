import Link from "next/link";
import Dashboard from "./index";

const Upload = () => {
  return (
    <Dashboard>
      <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral">
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
          <form>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Thumbnail</p>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Title</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Description</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Price</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Category</p>
              <select className="select select-bordered w-full lg:w-[775px]">
                <option disabled selected>
                  Select a category
                </option>
                <option>Java Script</option>
                <option>React Js</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Sub-category</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Dificulty Level</p>
              <select className="select select-bordered w-full lg:w-[775px]">
                <option disabled selected>
                  Select a category
                </option>
                <option>Beginner</option>
                <option>Basic</option>
                <option>Advance</option>
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Features</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Course Tags</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="divider"></div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Learner's Accessibility</p>
              <select className="select select-bordered w-full  lg:w-[775px]">
                <option disabled selected>
                  Select an access type
                </option>
                <option>Public</option>
                <option>Private</option>
                <option>Premium</option>
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
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Lesson Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered focus:outline-secondary w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center pb-7">
              <p className="font-semibold w-64">Lesson Description</p>
              <textarea
                className="textarea textarea-bordered focus:outline-secondary w-full h-40"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="ml-12 lg:ml-[210px] flex gap-5">
              <button className="btn btn-secondary text-white">Submit</button>
              <button className="btn btn-error">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default Upload;
