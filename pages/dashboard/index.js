import Sidebar from "./sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-6">{children}</div>
    </div>
  );
};

export default Dashboard;
