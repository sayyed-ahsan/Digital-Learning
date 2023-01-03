
const Newsletter = () => {
  return (
    <section className="bg-secondary text-white">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Newsletter Sign Up</h2>
          <p className="hidden text-base sm:mt-4 sm:block">
            Want to keep up to date with all our latest news and information? Enter your email below to be added to our mailing list.</p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" placeholder="Email address" className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-primary" />
            </div>

            <button type="submit" className="group mt-4 flex w-full items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none  sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Sign Up</span>
              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
