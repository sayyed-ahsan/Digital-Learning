import TeamMember from "../components/Home/TeamMember/TeamMember";
import Navber from '../components/Home/Navber/Navbar'
import Footer from '../components/Home/Footer/Footer'
import DeveloperGoals from "../components/AboutUs/DeveloperGoals/DeveloperGoals";
import AboutWebsite from "../components/AboutUs/AboutWebsite/AboutWebsite";

const about = () => {
    return (
        <div>
            <Navber />
            <AboutWebsite></AboutWebsite>
            <TeamMember />
            <DeveloperGoals />
            <Footer></Footer>
        </div>
    );
};

export default about;