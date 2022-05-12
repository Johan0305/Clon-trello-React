import LandingHeaderBrand from "./LandingHeaderBrand";
import LandingHeaderButton from "./LandingHeaderButton";

const LandingHeader = () => {
return (
    <nav className="landingHeader">
    <LandingHeaderBrand/>
    <LandingHeaderButton/>
    </nav>
);
}

export default LandingHeader;