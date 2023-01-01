import Image from "next/image";
import newslatter from "../../../public/newslatter.jpg";

const Newsletter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${newslatter.src})`,
      }}
      className="  bg-center bg-cover bg-gradient-to-tr from-gray-800 to-black-500 h-[40vh] relative flex flex-col space-y-8 md:space-y-10 lg:space-y-12 justify-center items-center"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]" />

      {/* <Image src={newslatter} width={420} height={200} className='opacity-80 w-full h-full object-cover absolute mix-blend-overlay z-2'></Image> */}

      <h3 className="text-4xl font-bold text-white z-40">
        Subscribe Newsletter
      </h3>

      <form className=" bg-white w-4/5  md:w-1/2 shadow-lg  text-2xl rounded-md   h-11 my-5">
        <input
          type="email"
          placeholder="Enter Your Email"
          className=" bg-white w-full outline-none focus:outline p-3  text-black text-base rounded-md"
        />
      </form>

      <button className="bg-primary text-white w-24 lg:w-36 text-lg mb-5 py-2  rounded  z-40">
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
