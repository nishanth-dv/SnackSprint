import UserComponent from "./UserComponent";
import UserClassComponent from "../classComponents/UserComponent";

const AboutComponent = () => (
  <>
    <div className="about-container">
      <h1>About Me</h1>
      <UserClassComponent name="Nishanth" city="Bengaluru" contact="nishanth-dv" />
    </div>
  </>
);

export default AboutComponent;
