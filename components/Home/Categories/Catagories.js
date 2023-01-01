import Catagory from "./Catagory/Catagory";

const Catagories = ({ catagories }) => {
  return (
    <div>
      <h1 className="  text-gray-900 font-semibold text-4xl mt-6 text-center mb-6  ">
        Our Featured Courses Updated
      </h1>{" "}
      <hr />
      <div className="max-w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-8 " data-aos="zoom-in">
        {catagories.map((catagory) => (
          <Catagory catagory={catagory} key={catagory._id}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
