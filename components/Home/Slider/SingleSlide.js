import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

const SingleSlide = ({ slide }) => {
    const { id, picture, heading, description, btnText, prev, next } = slide;


    return (
        <div id={`slide${ id }`} className="carousel-item relative w-full">
            <div className="hero h-[85vh]" style={{
                backgroundImage: `url(${ picture.src
                    })`
            }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    {/* Slider Navigation button */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${ prev }`} className="btn btn-circle border-transparent text-white text-lg bg-primary hover:bg-accent">
                            <BsFillCaretLeftFill />
                        </a>
                        <a href={`#slide${ next }`} className="btn btn-circle border-transparent text-white text-lg bg-primary hover:bg-accent">
                            <BsFillCaretRightFill />
                        </a>
                    </div>

                    {/* Slider Content */}
                    <div className="max-w-xl text-white">
                        <h1 className="mb-5 text-4xl font-extrabold uppercase">{heading}</h1>
                        <p className="mb-5 text-base">
                            {description}
                        </p>
                        <button className='btn btn-primary'>{btnText}</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleSlide;
