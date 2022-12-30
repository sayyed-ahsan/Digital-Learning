import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image01 from '../../../public/slider01.jpg';
import image02 from '../../../public/slider02.jpg';
import image03 from '../../../public/slider03.jpg';
import image04 from '../../../public/slider04.jpg';
import image05 from '../../../public/slider05.jpg';
import image06 from '../../../public/slider06.jpg';
import {BsArrowRight} from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

const Slider = () => {
    const slides = [
        image01,
        image02,
        image03,
        image04,
        image05,
        image06
    ]


    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
       
        scale: 1.2,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: "40px", marginLeft: "60px", padding:"30px", cursor: "pointer" }}>
               <BsArrowLeft className="text-4xl text-black hover:bg-amber-600 rounded-xl shadow-2xl "/>
            </div>
        ),
        nextArrow: (
            <div style={{ width: "40px", marginRight: "60px", padding:"30px", cursor: "pointer" }}>
              
                <BsArrowRight className="text-4xl text-black hover:bg-amber-600 rounded-xl shadow-2xl "/>
            </div>
        ),
    };
    return (
        <div>
            <Zoom {...zoomInProperties}>
               
                {slides.map((img, index) => (
                    <div key={index} className="flex justify-center w-full h-full">
                        <img
                            className="w-full  object-cover rounded-lg shadow-2xl"
                            src={img.src}
                        />
                    </div>
                ))}
                
            </Zoom>
           
        </div>
    );
};

export default Slider;
