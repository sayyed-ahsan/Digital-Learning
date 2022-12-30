import { BsBarChartLine, BsClock, BsFillFileTextFill, BsFillTrophyFill, BsFillCartFill } from "react-icons/bs";
import ReactPlayer from 'react-player/lazy'


const CourseRightContent = () => {
    return (
        <div className='lg:absolute lg:right-0 lg:-top-52'>
            <div className="bg-base-100 shadow-xl">
                <div className='player-wrapper'>
                    <ReactPlayer
                        width='100%'
                        height='350px'
                        controls={true}
                        url='https://www.youtube.com/watch?v=v0ir_CwypVk' />
                </div>
                <div className='m-5'>
                    <h2 className="text-3xl font-bold">$84.99</h2>
                    {/* featured section */}
                    <div>
                        <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                            <p className='flex items-center gap-2'>
                                <BsBarChartLine />
                                <span>Course level:</span>
                            </p>
                            <p>Beginner</p>
                        </div>
                        <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                            <p className='flex items-center gap-2'>
                                <BsClock />
                                <span>Duration:</span>
                            </p>
                            <p>02h 40m 32s</p>
                        </div>
                        <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                            <p className='flex items-center gap-2'>
                                <BsFillFileTextFill />
                                <span>articles:</span>
                            </p>
                            <p>Total 20</p>
                        </div>
                        <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                            <p className='flex items-center gap-2'>
                                <BsFillFileTextFill />
                                <span> downloadable resources:</span>
                            </p>
                            <p>10</p>
                        </div>
                        <div className='flex justify-between my-5 font-semibold border-b-2 pb-2'>
                            <p className='flex items-center gap-2'>
                                <BsFillTrophyFill />
                                <span>Certificate:</span>
                            </p>
                            <p>Available</p>
                        </div>
                    </div>

                    <div className="card-actions justify-end ">
                        <button className='my-10 flex btn btn-secondary text-white w-full uppercase font-bold rounded-full gap-1'>
                            <BsFillCartFill />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CourseRightContent
