import Link from 'next/link';
import React from 'react';
import Dashboard from '.';

const all_instractors = ({ allInstractors }) => {
    // console.log(allInstractors)
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
                <div className="overflow-x-auto w-full  pb-10">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>InsTractors Name</th>
                                <th>Delet</th>
                                <th>Acction</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allInstractors.map(instrator => <tr key={instrator._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                    <span>MX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {instrator?.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{instrator?.email}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Remove</button>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                        {/* <!-- foot --> */}


                    </table>
                </div>
                {/* upload section */}
            </div>
        </Dashboard>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/users/all_instractors`);
    const allInstractors = await res.json();
    // Pass data to the page via props
    return { props: { allInstractors } };
}

export default all_instractors;