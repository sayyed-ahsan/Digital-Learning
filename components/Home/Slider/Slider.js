import image01 from '../../../public/slider01.jpg';
import image02 from '../../../public/slider02.jpg';
import image03 from '../../../public/slider03.jpg';
import image04 from '../../../public/slider04.jpg';
import image05 from '../../../public/slider05.jpg';
import image06 from '../../../public/slider06.jpg';
import SingleSlide from './SingleSlide';




const Slider = () => {

    return (

        <div className="carousel w-full">
            {
                slides.map((slide, id) => <SingleSlide key={id} slide={slide}></SingleSlide>)
            }
        </div>

    );
};

export default Slider;
