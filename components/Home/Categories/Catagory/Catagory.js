import Link from "next/link";
import {
  BsFillGrid3X3GapFill,
  BsFillStarFill,
  BsList,
  BsStar,
} from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaFilter, FaFolder } from "react-icons/fa";

const Catagory = ({ catagory }) => {
  const { image, courseCatagory, intro, catagoryid } = catagory;
  return (
    // <div key={catagoryid} className="shadow-lg border border-slate-200">
    //   <div className="relative">
    //     <a className="block relative h-48 overflow-hidden">
    //       <img
    //         alt="ecommerce"
    //         className="object-cover object-center w-full h-full block"
    //         src={image}
    //       />
    //     </a>
    //     <p className="text-xl absolute right-2 text-white bottom-2 badge badge-secondary py-4 rounded-sm">
    //       200
    //     </p>
    //   </div>
    //   <div className="my-4 px-5 py-3">
    //     <div className="flex justify-between items-center mx-2">
    //       <div className="text-lg inline p-2 text-secondary font-semibold border border-secondary">
    //         Top Categories
    //       </div>
    //       <div className="flex items-center gap-2 font-bold text-amber-500 my-5">
    //         <span></span>
    //         <div className="flex gap-1">
    //           <BsFillStarFill />
    //           <BsFillStarFill />
    //           <BsFillStarFill />
    //           <BsFillStarFill />
    //           <BsStar />
    //         </div>
    //       </div>
    //     </div>
    //     <h2 className="text-gray-900 h-20 text-2xl font-semibold">
    //       {courseCatagory}
    //     </h2>
    //     <p className="my-5">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
    //       temporibus voluptatibus laudantium aliquid tempora nemo repellat minus
    //       cupiditate explicabo ipsum.
    //     </p>
    //     <button className="btn btn-primary rounded-none btn-md text-white w-full">
    //       See Details
    //     </button>
    //   </div>
    // </div>
    <div className="shadow-sm text-black">
      <div className="bg-neutral">
        <img className="w-full h-48" src={image} alt="" />

        <h2 className="text-2xl h-20 mt-5 p-2">{courseCatagory}</h2>
        <p className="px-2 py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, rem.
        </p>
        <div className="flex justify-between p-2">
          <button className="btn btn-secondary text-white btn-md">
            See Details
          </button>
          <p className="text-sm flex items-center">
            <BiTime /> <span className="ml-2">Dec 31, 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
