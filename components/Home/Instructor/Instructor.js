import { BsFillCheckCircleFill } from "react-icons/bs";


const Instructor = () => {
    return (
        <div className='lg:w-1/2 mx-auto'>
            <div className='text-black text-center my-10'>
                <h2 className="text-center text-4xl font-semibold">Meet Our Teachers</h2>
                <p className="mt-5 text-xl font-normal">
                    Morbi ligula massa, commodo at nisl tincidunt, dignissim feugiat metus. Suspendisse placerat lacinia porttitor. Vivamus
                </p>
            </div>
            <div className="card rounded-none lg:card-side text-black shadow-xl">
                <figure><img className='max-h-96' src="teacher.jpg" alt="Album" /></figure>
                <div className="flex flex-col justify-center items-end m-10">
                    <div className='flex flex-col gap-2'>
                        <li className='list-none flex items-center gap-5'>
                            <BsFillCheckCircleFill className='text-2xl text-secondary' />
                            <span>Rerum reiciendis beatae tenetur excepturi</span>
                        </li>
                        <li className='list-none flex items-center gap-2'>
                            <BsFillCheckCircleFill className='text-2xl text-secondary' />
                            <span>Rerum reiciendis beatae tenetur excepturi</span>
                        </li>
                        <li className='list-none flex items-center gap-2'>
                            <BsFillCheckCircleFill className='text-2xl text-secondary' />
                            <span>Rerum reiciendis beatae tenetur excepturi</span>
                        </li>
                        <li className='list-none flex items-center gap-2'>
                            <BsFillCheckCircleFill className='text-2xl text-secondary' />
                            <span>Rerum reiciendis beatae tenetur excepturi</span>
                        </li>
                        <li className='list-none flex items-center gap-2'>
                            <BsFillCheckCircleFill className='text-2xl text-secondary' />
                            <span>Rerum reiciendis beatae tenetur excepturi</span>
                        </li>
                    </div>
                    <div className="card-actions justify-end mt-10">
                        <button className="btn btn-secondary text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
