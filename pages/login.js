import Login from "../components/Login/Login/Login";
const login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch("http://localhost:5000/api/login", {
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
          localStorage.setItem("dl-access-token", data.user_token);
          window.location.href = "/";
        }
        else {
          alert("Invalid Email or Password");
        }
      });
  };


  return (
    <div className="mt-10">
      <Login handleLogin={handleLogin} />
    </div>
  );
};

export default login;
