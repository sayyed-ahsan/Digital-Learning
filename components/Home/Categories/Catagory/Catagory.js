import Link from "next/link";

const Catagory = ({ catagory }) => {
  const { image, courseCatagory, intro, catagoryid } = catagory;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl text-black">
      <figure>
        <img className="h-72" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{courseCatagory}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link href={`/catagory/${catagoryid}`} className=" font-bold">
              See Details{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
