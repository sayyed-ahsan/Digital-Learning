import Link from 'next/link';
import React from 'react';
import Dashboard from '.';

const allStudents = () => {
    return (
        <Dashboard>
            <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral text-black">
                {/* title section */}
                <div className="flex justify-center lg:justify-between gap-2">
                    <div>
                        <h2 className="text-xl lg:text-3xl font-semibold">All Students</h2>
                        <p className="py-2 mb-5 w-28 lg:w-full text-xs lg:text-base">
                            Welcome to PathShala All Students page
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
                <section>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* <!-- row 2 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* upload section */}

            </div>
        </Dashboard>
    );
};

export default allStudents;