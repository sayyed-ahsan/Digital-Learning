import Catagory from "./Catagory/Catagory";

const Catagories = ({ catagories }) => {
  return (
    <div>
      <h1 className="  text-gray-900 font-semibold text-4xl mt-6 text-center mb-6  ">
        Our Featured Courses
      </h1>
      <hr />
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {catagories.map((catagory) => (
          <Catagory catagory={catagory} key={catagory._id}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
