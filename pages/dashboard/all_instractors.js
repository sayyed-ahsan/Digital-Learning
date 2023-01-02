import Link from 'next/link';
import React from 'react';
import Dashboard from '.';

const all_instractors = () => {
    return (
        <Dashboard>
            <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral text-black">
                {/* title section */}
                <div className="flex justify-center lg:justify-between gap-2">
                    <div>
                        <h2 className="text-xl lg:text-3xl font-semibold">All Instractors</h2>
                        <p className="py-2 mb-5 w-28 lg:w-full text-xs lg:text-base">
                            Welcome to PathShala All Instractors page
                        </p>
                    </div>
                    <div className="text-xs lg:text-sm breadcrumbs">
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/dashboardlayout/home"}>Dashboard</Link>
                            </li>
                            <li>Upload</li>
                        </ul>
                    </div>
                </div>
                {/* upload section */}
                {/* upload section */}

            </div>
        </Dashboard>
    );
};

export default all_instractors;