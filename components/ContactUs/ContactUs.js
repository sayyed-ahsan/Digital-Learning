import { useForm } from "react-hook-form";
import Map from "../Map";

const ContactUs = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const position = [51.505, -0.09];

  return (
    <div className="py-10">
      <h2 className="text-center text-4xl font-bold">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-9/12 mx-auto">
        <div>
          <Map />
        </div>
        <div>
          <h2 className="text-3xl font text-primary py-5">Send a Message</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-neutral p-2 lg:p-8"
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
    </div>
  );
};

export default ContactUs;
