import { useForm } from "react-hook-form";
import Map from "../Map";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bv0pf2q', 'template_3q5d7ti', e.target, "DbqUpRJBHDeY5xylY")
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
    toast.success('Message sent successfully')
    e.target.reset();

  };


  const position = [51.505, -0.09];

  return (
    <div className="pb-10">
      <div className="hero" style={{ backgroundImage: `url("contact-img.jpg")` }}>
        <div className="hero-overlay bg-slate-700 bg-opacity-70"></div>
        <div className="hero-content lg:py-20 py-10 text-left text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="text-5xl font-bold my-3">Contact With US</h1>
            <p className='text-center text-3xl'>We’d Love To Help You</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/12 mx-auto">
        <div>
          <Map />
        </div>
        <div>
          <h2 className="text-3xl font text-primary py-5">Send a Message</h2>
          <form
            onSubmit={sendEmail}
            className="bg-neutral p-2 lg:p-8 text-black"
          >
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
    </div>
  );
};

export default ContactUs;
