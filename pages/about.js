import TeamMember from "../components/AboutUs/TeamMember/TeamMember";
import DeveloperGoals from "../components/AboutUs/DeveloperGoals/DeveloperGoals";
import AboutWebsite from "../components/AboutUs/AboutWebsite/AboutWebsite";

const about = () => {
  return (
    <div>
      <AboutWebsite></AboutWebsite>
      <TeamMember />
      <DeveloperGoals />
    </div>
  );
};

export default about;
