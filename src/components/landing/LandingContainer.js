import LandingContainerDescription from "./LandingContainerDescription";
import LandingContainerIllustration from "./LandingContainerIllustration";

const LandingContainer = () => {
    return (
        <div className="landingContainer">
            <LandingContainerDescription />
            <LandingContainerIllustration />            
        </div>
    );
}

export default LandingContainer;