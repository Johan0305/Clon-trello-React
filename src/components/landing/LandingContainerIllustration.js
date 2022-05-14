import landingIllustration from "../../assets/illustrations/landing-illustration.svg"

const LandingContainerIllustration = () =>{
    return (
        <figure className="landindgContainer-Illustration">
            <img src={landingIllustration} alt="Hero-Img" loading="lazy" />
        </figure>
    );
}

export default LandingContainerIllustration;