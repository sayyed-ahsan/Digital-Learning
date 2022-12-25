import React from 'react';

const Featured = () => {
    return (

        <div className="flex  my-4 p-12 justify-center ">
            <div className="card lg:card-side shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Instractor titel and name</h2>
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
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>


                    </div>
                    {/*  */}

                    <div className="flex">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti saepe ipsum vero quam at, magni aspernatur! Soluta fugiat.
                    </div>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Listen</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Featured;