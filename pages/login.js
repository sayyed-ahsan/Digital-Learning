import Navber from "../components/Home/Navbar/Navbar";
import Login from "../components/Login/Login/Login";

const login = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="mt-10">
        <Login />
      </div>
    </div>
  );
};

export default login;
