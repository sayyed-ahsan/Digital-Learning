import Signup from "../components/Login/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
import useAuth from "../hook/useAuth";
const signup = () => {

  const { user, loading, setLoading, loggedToken, setLoggedToken } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    fetch("https://digittal-learning-node-auth.vercel.app/api/register", {
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
        toast("Signup Successfull Please Login");
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
