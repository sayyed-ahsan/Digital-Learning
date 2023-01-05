import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { VscMortarBoard } from "react-icons/vsc";
import {
  BsBarChartLine,
  BsClock,
  BsFillFileTextFill,
  BsFillTrophyFill,
  BsFillCartFill,
  BsYoutube,
} from "react-icons/bs";
import ReactPlayer from "react-player/lazy";
import useAuth from "../../hook/useAuth";

const CourseDetails = ({ singleCourse }) => {
  const router = useRouter();
  const id = router.query.courseId;
  const { title, subtitle, thumbnail, details, price } = singleCourse;
  const { lists } = singleCourse.details[1];

  const { user } = useAuth();
  console.log(user);

  const handleEnroll = () => {
    // console.log('working');
    const postData = async () => {
      const enrollCourse = {
        price: price,
        course_name: title,
        customer_name: user.name,
        customer_email: user.email,
        payment_status: false,
      };
      console.log(enrollCourse);
      const res = await fetch(`/api/payment/enroll`, {
        method: "POST",
        body: JSON.stringify(enrollCourse),
      });
      return res.json();
    };
    postData().then((data) => {
      console.log(data);
      window?.location?.replace(data.url);
    });
  };

  return (
    <div className="mb-10">
      {/* single course top heading */}
      <div className="hero bg-slate-500">
        <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
        <div className="hero-content py-16 text-left text-neutral-content">
          <div className="text-white">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="py-2">{subtitle}</p>
            <div className="flex items-center gap-2 text-xl text-orange-300">
              <span>{details[0].rating}</span>
              <div className="flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="text-white text-base flex items-center gap-3">
                <p>(248,175 ratings)</p>
                <p>847,462 students</p>
              </div>
            </div>
            <p className="my-1">
              Created by{" "}
              <Link className="underline text-orange-400" href="/">
                Md Jasim
              </Link>
            </p>
            <p className="">Last updated 11/2022</p>
          </div>
        </div>
      </div>
      {/* single course body */}
      <div className="my-20 w-11/12 mx-auto lg:grid lg:grid-cols-3 flex flex-col-reverse text-black gap-10 relative">
        {/* single course Left side */}
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <div className="text-info text-lg flex flex-col gap-3">
            <p>{details[1].description1}</p>
            <p>{details[1].description2}</p>
            <p>{details[1].description3}</p>
          </div>
          <h3 className="text-2xl font-semibold mb-4">What you will learn</h3>
          <ul className="list-disc list-inside flex flex-col gap-3">
            <li>{lists.list1}</li>
            <li>{lists.list2}</li>
            <li>{lists.list3}</li>
            <li>{lists.list4}</li>
            <li>{lists.list5}</li>
          </ul>
          <div className="my-5">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold mb-4">
                Topics for this course
              </h3>
              <div className="text-base font-medium flex gap-3">
                <span>9 Lessons</span>
                <span>02h 40m 32s</span>
              </div>
            </div>
            {/* course video section */}
            <section className="">
              <div className="container flex flex-col justify-center">
                <div className="space-y-4 text-secondary">
                  <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                    <summary className="px-4 py-6 text-xl font-semibold">
                      Introduction
                    </summary>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                  </details>

                  <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                    <summary className="px-4 py-6 text-xl font-semibold">
                      Frontend web Development
                    </summary>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4  font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                  </details>

                  <details className="w-full border border-secondary rounded-lg  cursor-pointer">
                    <summary className="px-4 py-6 text-xl font-semibold">
                      Introduction to HTML
                    </summary>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 font-medium flex gap-2 items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <BsYoutube />
                        <span>What you will get In this Course</span>
                      </div>
                      <p>13:50</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
            {/* course video section */}
            <div className="my-10">
              <h3 className="text-2xl font-semibold mb-4">
                About the instructor
              </h3>
              <div className="border-2 border-neutral">
                <div className="flex items-center gap-10 px-2 py-5">
                  <div className="avatar">
                    <div className="w-36 rounded-full">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                      <span className="text-sm">General manager</span>
                    </div>
                    <div className="space-y-1">
                      <p>
                        I've spent the last few years teaching people to program
                        at 2 different immersive bootcamps where I've helped
                        hundreds of people become web developers and change
                        their lives. My graduates work at companies like Google,
                        Salesforce, and Square. I've helped hundreds of people
                        become web developers
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="py-4 px-2 flex items-center justify-between">
                  <p className="flex items-center text-amber-500 font-semibold">
                    <AiFillStar />
                    <span>4.7 Instructor Rating</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="flex items-center  font-semibold">
                      <VscMortarBoard />
                      <span>20 Courses</span>
                    </p>
                    <p className="flex items-center font-semibold">
                      <span>47568721 Students</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single course Left side */}
        <div className="lg:absolute lg:right-0 lg:-top-52">
          <div className="bg-base-100 shadow-xl">
            <ReactPlayer
              width="100%"
              height="350px"
              controls={true}
              url="https://www.youtube.com/watch?v=v0ir_CwypVk"
            ></ReactPlayer>

            <div className="m-5">
              <h2 className="text-3xl font-bold">${price}</h2>
              {/* featured section */}
              <div>
                <div className="flex justify-between my-5 font-semibold border-b-2 pb-2">
                  <p className="flex items-center gap-2">
                    <BsBarChartLine />
                    <span>Course level:</span>
                  </p>
                  <p>Beginner</p>
                </div>
                <div className="flex justify-between my-5 font-semibold border-b-2 pb-2">
                  <p className="flex items-center gap-2">
                    <BsClock />
                    <span>Duration:</span>
                  </p>
                  <p>{details[0].duration}</p>
                </div>
                <div className="flex justify-between my-5 font-semibold border-b-2 pb-2">
                  <p className="flex items-center gap-2">
                    <BsFillFileTextFill />
                    <span>articles:</span>
                  </p>
                  <p>{details[0].articles}</p>
                </div>
                <div className="flex justify-between my-5 font-semibold border-b-2 pb-2">
                  <p className="flex items-center gap-2">
                    <BsFillFileTextFill />
                    <span> downloadable resources:</span>
                  </p>
                  <p>{details[0].resources}</p>
                </div>
                <div className="flex justify-between my-5 font-semibold border-b-2 pb-2">
                  <p className="flex items-center gap-2">
                    <BsFillTrophyFill />
                    <span>Certificate:</span>
                  </p>
                  <p>{details[0].certificate}</p>
                </div>
              </div>

              <div className="card-actions justify-end ">
                <button
                  onClick={handleEnroll}
                  className="my-10 flex btn btn-secondary text-white w-full uppercase font-bold rounded-full gap-1"
                >
                  <BsFillCartFill />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { courseId } = context.query;
  // Fetch data from external API
  const res = await fetch(
    `https://digital-learning-ruddy.vercel.app/api/courses/${courseId}`
  );
  const singleCourse = await res.json();
  // Pass data to the page via props
  return { props: { singleCourse } };
}

export default CourseDetails;
