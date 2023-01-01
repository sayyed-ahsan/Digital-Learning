import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Featured() {
    return (
        <>
            <div className='my-10 px-10'>
                {/* <h2 className="text-4xl text-center text-black font-bold">Featured</h2> */}
            </div>

            <Swiper
                slidesPerView={1.7}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
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
            <div className="card lg:card-side shadow-xl">
                <figure className="w-1/3">
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div className="card-body text-black">
                    <h2 className="card-title text-2xl">Instructor title and name</h2>
                    {/*  */}
                    <div className="flex">
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
                    {/*  */}

                    <div className="flex">
                        Thsis is ipsum dolor sit amet, consectetur adipisicing elit.
                        <br />
                        our consectetur adipisicing elit.is ipsum dolor sit amet,
                        <br />
                        Lorem ipsum dolor sit amet consectetur...
                    </div>

                    <div>
                        <button className="btn glass btn-outline btn-success">Glass button</button>
                    </div>

                </div>
            </div>
        </div>
    );
}



