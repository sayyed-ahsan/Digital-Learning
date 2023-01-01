import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Featured() {
  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold">Featured</h2>
      </div>
      <Swiper
        slidesPerView={1.7}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>{card()}</SwiperSlide>
        <SwiperSlide>{card()}</SwiperSlide>
        <SwiperSlide>{card()}</SwiperSlide>
      </Swiper>
    </>
  );
}

function card() {
  return (
    <div className="flex my-4 p-12 justify-center ">
      <div className="flex gap-5 shadow-xl">
        <figure className="w-1/3">
          <img className="rounded" src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="">
          <h2 className="text-3xl font-semibold pb-3">Instractor</h2>
          <div className="flex my-4">

            <div className="relative flex-shrink-0">
              <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 dark:bg-red-600 border rounded-full dark:border-gray-900 dark:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
                  <rect width="368" height="32" x="72" y="240"></rect>
                </svg>
              </span>
              <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
            </div>

            <div className="ml-2">
              <div>
                <p className="text-2xl">Mr. Jasim</p>
                <div className="rating h-4">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex py-2">
            This is one of the best... is one of the best...
          </div>

          <div className="flex justify-start mb-2">
            <div><button className="btn-sm rounded btn-success">Enrole</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
