//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image01 from '../../../public/slider01.jpg';
import image02 from '../../../public/slider02.jpg';
import image03 from '../../../public/slider03.jpg';
import image04 from '../../../public/slider04.jpg';
import image05 from '../../../public/slider05.jpg';
import image06 from '../../../public/slider06.jpg';

import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

const Slider = () => {
    const slides = [
        image01,
        image02,
        image03,
        // image04,
        image05,
        image06
    ]


    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {

        scale: 1.2,
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: "40px", marginLeft: "60px", padding: "30px", cursor: "pointer" }}>
                <BsArrowLeft className="text-4xl text-white bg-secondary p-2 hover:bg-amber-600 rounded-full shadow-2xl " />
            </div>
        ),
        nextArrow: (
            <div style={{ width: "40px", marginRight: "60px", padding: "30px", cursor: "pointer" }}>

                <BsArrowRight className="text-4xl text-white bg-secondary p-2 hover:bg-amber-600 rounded-full shadow-2xl " />
            </div>
        ),
    };
    return (
        <div>
            <Zoom {...zoomInProperties}>

                {slides.map((img, index) => (
                    <div key={index} className="flex justify-center w-full h-[95vh] bg-gradient-to-t from-black">
                        <img
                            className="mix-blend-overlay w-full object-cover shadow-2xl relative"
                            src={img.src}
                        />

                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />

                        <div className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 space-y-6 text-center z-10'>
                            <h1 className='lg:text-5xl text-4xl font-semibold text-white  mb-0'>New year, new career moves</h1>

                            <div className='w-full text-center'>
                                <p className='text-base text-white lg:w-3/4 w-full inline-block
                            '>Discover what employers are looking for in 2023 and how to level up with our skills guide — yours free when you buy a course.</p>
                            </div>

                            <button className="btn btn-secondary text-white">Explore More</button>
                        </div>
                    </div>
                ))}

            </Zoom>

        </div>
    );
};

export default Slider;
