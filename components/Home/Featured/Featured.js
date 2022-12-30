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
        slidesPerView={3}
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
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="">
          <h2 className="text-3xl font-semibold pb-3">Instractor</h2>
          <div className="flex my-4">
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>

          <div className="justify-start">
            <button className="btn btn-primary rounded-sm">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
