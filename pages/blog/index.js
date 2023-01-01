import React from 'react';

const index = () => {
    return (

        <section>
            {/*  */}
            <section>
                <div className="relative">
                    <img
                        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="absolute inset-0 object-cover w-full h-full"
                        alt=""
                    />
                    <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                        <svg
                            className="absolute inset-x-0 bottom-0 text-white"
                            viewBox="0 0 1160 163"
                        >
                            <path
                                fill="currentColor"
                                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                            />
                        </svg>
                        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                        The quick, brown fox <br className="hidden md:block" />
                                        jumps over a lazy dog
                                    </h2>
                                    <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                        quae.
                                    </p>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                    >
                                        Learn more
                                        <svg
                                            className="inline-block w-3 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 12 12"
                                        >
                                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Sign up for updates
                                        </h3>
                                        <form>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="firstName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    placeholder="John"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    name="firstName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="lastName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    placeholder="Doe"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    name="lastName"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="email"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    E-mail
                                                </label>
                                                <input
                                                    placeholder="john.doe@example.org"
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="email"
                                                    name="email"
                                                />
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <button className="btn w-full btn-outline btn-info">Sign up</button>
                                            </div>
                                            <p className="text-xs text-gray-600 sm:text-sm">
                                                We respect your privacy. Unsubscribe at any time.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blogs card */}
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                            <img
                                src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                className="object-cover w-full h-64"
                                alt=""
                            />
                            <div className="p-5 border border-t-0">
                                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                    <a
                                        href="/"
                                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                        aria-label="Category"
                                        title="traveling"
                                    >
                                        traveling
                                    </a>
                                    <span className="text-gray-600">— 28 Dec 2020</span>
                                </p>
                                <a
                                    href="/"
                                    aria-label="Category"
                                    title="Visit the East"
                                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    Visit the East
                                </a>
                                <p className="mb-2 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                    consequuntur magni voluptatem doloremque.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                            <img
                                src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64"
                                alt=""
                            />
                            <div className="p-5 border border-t-0">
                                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                    <a
                                        href="/"
                                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                        aria-label="Category"
                                        title="traveling"
                                    >
                                        traveling
                                    </a>
                                    <span className="text-gray-600">— 28 Dec 2020</span>
                                </p>
                                <a
                                    href="/"
                                    aria-label="Category"
                                    title="Simple is better"
                                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    Simple is better
                                </a>
                                <p className="mb-2 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                    consequuntur magni voluptatem doloremque.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                            <img
                                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-full h-64"
                                alt=""
                            />
                            <div className="p-5 border border-t-0">
                                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                    <a
                                        href="/"
                                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                        aria-label="Category"
                                        title="traveling"
                                    >
                                        traveling
                                    </a>
                                    <span className="text-gray-600">— 28 Dec 2020</span>
                                </p>
                                <a
                                    href="/"
                                    aria-label="Category"
                                    title="Film It!"
                                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    Film It!
                                </a>
                                <p className="mb-2 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                    consequuntur magni voluptatem doloremque.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">World</h6>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Sport</h6>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Weather</h6>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Projects</h6>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Fitness</h6>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">News</h6>
                        </div>
                    </div>
                    <div className="text-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Learn more
                            <span className="ml-1 -mr-2">
                                <svg
                                    className="w-8 h-8 text-white"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-8 row-gap-5 md:grid-cols-2">
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                                <div className="mb-6 mr-6 lg:mb-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                        <svg
                                            className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            The quick, brown fox jumps over a very lazy dog
                                        </h6>
                                        <p className="mb-2 text-sm text-gray-900">
                                            Cheese on toast airedale the big cheese. Danish fontina cheesy
                                            grin airedale danish fontina taleggio the big cheese macaroni
                                            cheese port-salut.
                                        </p>
                                    </div>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                                <div className="mb-6 mr-6 lg:mb-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                        <svg
                                            className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Disrupt inspire and think tank, social
                                        </h6>
                                        <p className="mb-2 text-sm text-gray-900">
                                            A flower in my garden, a mystery in my panties. Heart attack
                                            never stopped old Big Bear. I didn't even know we were calling
                                            him Big Bear. We never had the chance to.
                                        </p>
                                    </div>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                                <div className="mb-6 mr-6 lg:mb-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                        <svg
                                            className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Disrupt inspire and think tank, social
                                        </h6>
                                        <p className="mb-2 text-sm text-gray-900">
                                            A flower in my garden, a mystery in my panties. Heart attack
                                            never stopped old Big Bear. I didn't even know we were calling
                                            him Big Bear. We never had the chance to.
                                        </p>
                                    </div>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                                <div className="mb-6 mr-6 lg:mb-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                        <svg
                                            className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h6 className="mb-2 font-semibold leading-5">
                                            Disrupt inspire and think tank, social
                                        </h6>
                                        <p className="mb-2 text-sm text-gray-900">
                                            A flower in my garden, a mystery in my panties. Heart attack
                                            never stopped old Big Bear. I didn't even know we were calling
                                            him Big Bear. We never had the chance to.
                                        </p>
                                    </div>
                                    <a
                                        href="/"
                                        aria-label=""
                                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                        20 Nov 2020
                    </p>
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div className="mb-4">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                            >
                                The quick, brown fox jumps over a lazy dog
                            </a>
                        </div>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="mb-10 sm:text-center">
                        <a href="/" aria-label="Author" className="inline-block mb-1">
                            <img
                                alt="avatar"
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Vasile Melinte
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>
                    <div className="sm:text-center">
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </section>


        </section>


    );
};

export default index;