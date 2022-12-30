const Countdown = () => {
  return (
    <section className="py-10 my-10 bg-secondary">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4 items-center">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">332+</p>
          <p className="text-sm sm:text-base">Courses</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">1400+</p>
          <p className="text-sm sm:text-base">Members</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">60+</p>
          <p className="text-sm sm:text-base">Authors</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">120+</p>
          <p className="text-sm sm:text-base">Subjects</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
