import Link from 'next/link';
import React from 'react';
import Dashboard from '.';

const allStudents = ({ allStudent }) => {
    console.log(allStudent)
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
                    <div className="overflow-x-auto pb-10">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Acction</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allStudent.map(student => <tr>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button className="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </section>
                {/* upload section */}

            </div>
        </Dashboard>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/users/allStudent`);
    const allStudent = await res.json();
    // Pass data to the page via props
    return { props: { allStudent } };
}


export default allStudents;