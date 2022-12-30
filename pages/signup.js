import Signup from "../components/Login/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
const signup = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        role,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.notify("Signup Successfull Please Login");
        // router.push("/login");
        e.target.reset();
      }
      );

  };

  return (
    <div>
      <Signup handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
};

export default signup;
