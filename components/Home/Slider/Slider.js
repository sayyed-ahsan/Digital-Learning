import image01 from '../../../public/slider01.jpg';
import image02 from '../../../public/slider02.jpg';
import image03 from '../../../public/slider03.jpg';
import image04 from '../../../public/slider04.jpg';
import image05 from '../../../public/slider05.jpg';
import image06 from '../../../public/slider06.jpg';
import SingleSlide from './SingleSlide';




const Slider = () => {

    const slides = [
        {
            id: 1,
            prev: 6,
            next: 2,
            picture: image01,
            heading: 'Become an instructor',
            description: 'Instructors from around the world teach millions of students on Pathshala. We provide the tools and skills to teach what you love.',
            btnText: 'Get Started',
        },
        {
            id: 2,
            prev: 1,
            next: 3,
            picture: image02,
            heading: 'Learn in-demand professional skills',
            description: 'Choose from courses in English and many other languages',
            btnText: 'Get Started',

        },
        {
            id: 3,
            prev: 2,
            next: 4,
            picture: image03,
            heading: 'Learning that gets you',
            description: 'Skills for your present (and your future). Get started with us.',
            btnText: 'Get Started',
        },
        {
            id: 4,
            prev: 3,
            next: 5,
            picture: image04,
            heading: 'Unlock the power of your people',
            description: 'Pathshala Business is trusted by 12.5K+ companies around the world.',
            btnText: 'Get Started',

        },
        {
            id: 5,
            prev: 4,
            next: 6,
            picture: image05,
            heading: 'Learning that gets you',
            description: 'Skills for your present (and your future). Get started with us.',
            btnText: 'Get Started',

        },
        {
            id: 6,
            prev: 5,
            next: 1,
            picture: image06,
            heading: 'Learn in-demand professional skills',
            description: 'Choose from courses in English and many other languages',
            btnText: 'Get Started',

        },

    ]


    return (

        <div className="carousel w-full">
            {
                slides.map((slide, id) => <SingleSlide key={id} slide={slide}></SingleSlide>)
            }
        </div>

    );
};

export default Slider;
