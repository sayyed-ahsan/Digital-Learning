const Instructor = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button className="btn btn-primary">Show more</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title text-4xl">Instractor titel and name</h2>

                                    <div className="flex">
                                        <input type="checkbox" checked className="checkbox checkbox-success mr-3" />
                                        <p>Rerum reiciendis beatae tenetur excepturi</p>
                                    </div>
                                    <div className="flex">
                                        <input type="checkbox" checked className="checkbox checkbox-success mr-3" />
                                        <p>Rerum reiciendis beatae tenetur excepturi</p>
                                    </div>
                                    <div className="flex">
                                        <input type="checkbox" checked className="checkbox checkbox-success mr-3" />
                                        <p>Rerum reiciendis beatae tenetur excepturi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------- */}
        </div>
    );
};

export default Instructor;
