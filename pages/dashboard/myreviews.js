import Link from 'next/link';
import React from 'react';
import Dashboard from '.';

const myreviews = () => {
    return (
        <Dashboard>
            <div className="pt-5 lg:pt-10 px-5 lg:px-40 mt-10 bg-neutral text-black">
                {/* title section */}
                <div className="flex justify-center lg:justify-between gap-2">
                    <div>
                        <h2 className="text-xl lg:text-3xl font-semibold">My Reviews</h2>
                        <p className="py-2 mb-5 w-28 lg:w-full text-xs lg:text-base">
                            Welcome to PathShala, Here is all of your Reviews.
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
                {/* ---------- */}
                <div className="dark:bg-blue-800 dark:text-gray-100">
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                        </div>
                        <div className="mt-3">
                            <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
                            <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                            <div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------- */}
                {/* ---------- */}
                <div className="dark:bg-blue-800 dark:text-gray-100">
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                        </div>
                        <div className="mt-3">
                            <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
                            <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                            <div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------- */}
                {/* ---------- */}
                <div className="dark:bg-blue-800 dark:text-gray-100">
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</a>
                        </div>
                        <div className="mt-3">
                            <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
                            <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                            <div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------- */}
            </div>
        </Dashboard>
    );
};

export default myreviews;