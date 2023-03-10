const Blog = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">

        <h1 className="  text-gray-900 font-semibold text-4xl mt-6 text-center mb-6">
          Our Latest Blogs{" "}
        </h1>{" "}
        <hr />
      </div>
      <div className="w-full py-10" data-aos="zoom-in-up">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div aria-label="group of cards" className="w-full ">
            <div className="flex flex-col lg:flex-row mx-auto bg-white shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    role="img"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/800px-Zayn_Wiki_%28cropped%29.jpg"
                    alt="avatar"
                  />
                </div>
                <a
                  tabIndex="0"

                  className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 cursor-pointer focus:underline"
                >
                  <h2 className=" text-xl tracking-normal font-medium mb-1">
                    Zayn Malik
                  </h2>
                </a>
                <a
                  tabIndex="0"
                  className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 text-sm tracking-normal font-normal mb-3 text-center"
                >
                  <span className="cursor-pointer mr-1 text-gray-600 ">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg1.svg"
                      alt="icon"
                    />
                  </span>
                  Chittagong,Bangladesh
                </a>
                <p className="text-gray-600  text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as
                  something that is personal, the more successful it is.
                </p>
                <button className="btn btn-secondary">See More</button>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200  flex items-center justify-center">
                  <img
                    role="img"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://backoffice.daily-bangladesh.com/media/imgAll/2020June/English/Shakib-2011021619.jpg"
                    alt="avatar"
                  />
                </div>
                <a
                  tabIndex="0"
                  className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800  cursor-pointer focus:underline"
                >
                  <h2 className=" text-xl tracking-normal font-medium mb-1">
                    Shakib Al Hasan
                  </h2>
                </a>
                <a
                  tabIndex="0"
                  className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 text-sm tracking-normal font-normal mb-3 text-center"
                >
                  <span className="cursor-pointer mr-1 text-gray-600">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg1.svg"
                      alt="icon"
                    />
                  </span>
                  Magura,Bangladesh
                </a>
                <p className="text-gray-600 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as
                  something that is personal, the more successful it is.
                </p>
                <button className="btn btn-secondary">See More</button>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    role="img"
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://www.brandcrunch.com.ng/wp-content/uploads/2012/07/1251225681_david_beckham_290x402.jpg"
                    alt="avatar"
                  />
                </div>
                <a
                  tabIndex="0"
                  className="focus:outline-none focus:opacity-75 hover:opacity-75 text-gray-800 cursor-pointer focus:underline"
                >
                  <h2 className=" text-xl tracking-normal font-medium mb-1">
                    David Beckham
                  </h2>
                </a>
                <a
                  tabIndex="0"
                  className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 text-sm tracking-normal font-normal mb-3 text-center"
                >
                  <span className="cursor-pointer mr-1 text-gray-600">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_3_section_card-svg1.svg"
                      alt="icon"
                    />
                  </span>
                  London,England
                </a>
                <p className="text-gray-600 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as
                  something that is personal, the more successful it is.
                </p>
                <button className="btn btn-secondary">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Blog;
