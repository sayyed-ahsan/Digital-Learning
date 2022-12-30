import Image from "next/image";
import newslatter from "../../../public/newslatter.jpg";

const Newsletter = () => {
  return (
    <div className="bg-slate-50 relative flex flex-col  justify-center items-center mt-10 py-10">
      <div className="" />

      {/* <Image src={newslatter} width={420} height={200} className='opacity-80 w-full h-full object-cover absolute mix-blend-overlay z-2'></Image> */}

      <h3 className="text-4xl font-bold py-4">Subscribe Newsletter</h3>
      <p>Subscribe to our Newsletter to stay updated</p>

      <form className=" bg-white w-4/5  md:w-1/2 shadow-lg  text-2xl rounded-md   h-11 my-5">
        <input
          type="email"
          placeholder="Enter Your Email"
          className=" bg-white w-full outline-none focus:outline p-3  text-black text-base rounded-md"
        />
      </form>

      <button className="bg-primary text-white w-24 lg:w-36 text-lg mb-5 py-2  rounded ">
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
