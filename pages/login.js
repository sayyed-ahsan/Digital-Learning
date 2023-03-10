import { useRouter } from "next/router";
import Login from "../components/Login/Login/Login";
import useAuth from "../hook/useAuth";

const login = () => {
  const { user, loading, setLoading, loggedToken, setLoggedToken } = useAuth();
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch("https://digittal-learning-node-auth.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.user_token) {
          setLoggedToken({ dl_token: data.user_token });
          localStorage.setItem("dl-token", data.user_token);
          router.push("/");
        }
        else {
          alert("Invalid Email or Password");
        }
      });
  };


  return (
    <div className="mt-10 text-black">
      <Login handleLogin={handleLogin} />
    </div>
  );
};

export default login;
