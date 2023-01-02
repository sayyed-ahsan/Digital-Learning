import Link from "next/link";

const Failed = () => {
    return (
        <div className="h-fit flex flex-col items-center">
            <h2 className="text-red-500 font-bold">Your Payment for this course has been Failed</h2>
            <img src={'../../paymentfailed.gif'} className=" mt-5" alt="" />
            <Link className="btn btn-error text-white text-center" href="/courses">Go to Courses</Link>

        </div>
    );
};

export default Failed;