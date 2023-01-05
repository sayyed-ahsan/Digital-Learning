import { useForm } from "react-hook-form";
import Map from "../Map";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFilter, FaFolder } from "react-icons/fa";

const ContactUs = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bv0pf2q",
        "template_3q5d7ti",
        e.target,
        "DbqUpRJBHDeY5xylY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message sent successfully");
    e.target.reset();
  };

  const position = [51.505, -0.09];

  return (
    <div className="pb-10">
      <div
        className="hero"
        style={{ backgroundImage: `url("Contact-Us.png")` }}
      >
        <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
        <div className="hero-content py-10 text-left text-neutral-content">
          <div className="max-w-md text-white">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a href="/">
                    <FaFolder />
                    <span className="ml-2">Home</span>
                  </a>
                </li>
                <li>
                  <FaFolder />
                  <span className="ml-2">Contact</span>
                </li>
              </ul>
            </div>
            <h1 className="mb-5 text-5xl font-bold">Contact</h1>
          </div>
        </div>
      </div>
      <div className="">
        <Map />
      </div>
      <h2 className="text-3xl font-semibold text-center py-5 mt-5 uppercase">
        Connect with us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/12 mx-auto">
        <div>
          <img src="../../contact.gif" alt="" />
        </div>
        <div>
          <form onSubmit={sendEmail} className=" p-2 lg:p-8 text-black">
            <label className="block mb-5">
              <span className="mb-3">Name</span>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered  w-full rounded-md "
              />
              {/* {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )} */}
            </label>
            <label className="block mb-5">
              <span className="mb-3">Email</span>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered  w-full rounded-md "
              />
              {/* {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )} */}
            </label>
            <label className="block mb-5">
              <span className="mb-3">Subject</span>
              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                name="subject"
                placeholder="Enter subject"
                className="input input-bordered  w-full rounded-md "
              />
              {/* {errors.subject && (
              <p className="text-red-600">{errors.subject?.message}</p>
            )} */}
            </label>
            <label className="block mb-12">
              <span className="mb-3">Message</span>
              <input
                {...register("message", { required: "Message is required" })}
                type="text"
                name="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered  w-full h-40 rounded-md "
              />
              {/* {errors.message && (
              <p className="text-red-600">{errors.message?.message}</p>
            )} */}
            </label>
            <button
              type="submit"
              className="bg-primary text-white py-3 px-5 w-40  font-semibold text-center"
            >
              Send
              {/* {loading ? <SmallSpinner /> : "Send"} */}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      {/* FAQ */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Ex orci laoreet egestas sapien magna egestas scelerisque?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                nullam taciti at adipiscing est.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                odio?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                porttitor egestas tincidunt neque vehicula potenti.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                suscipit erat?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Justo libero tellus integer tincidunt justo semper consequat
                venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                pretium sodales vel magna et massa euismod vulputate sed.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
