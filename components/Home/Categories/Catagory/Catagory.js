import { BiTime } from "react-icons/bi";

const Catagory = ({ catagory }) => {
  const { image, courseCatagory, intro, catagoryid } = catagory;
  return (
    <div className="shadow-lg rounded-md text-black">
      <div className="bg-white">
        <img className="w-full h-48" src={image} alt="" />
        <h2 className="text-2xl h-20 mt-5 p-2">{courseCatagory}</h2>
        <p className="px-2 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem.</p>
        <div className="flex justify-between p-5">
          <button className="btn btn-secondary text-white btn-md">See Details</button>
          <p className="text-sm flex items-center">
            <BiTime /><span className="ml-2">Dec 31, 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
