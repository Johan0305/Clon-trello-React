import landingIllustration from "../../assets/illustrations/landing-illustration.svg";

const LandingContainerIllustration = () => {
  return (
    <figure className="landindgContainer-Illustration">
      <img
        src={landingIllustration}
        alt="Hero-Img"
        loading="lazy"
        data-cy="img-landing"
      />
    </figure>
  );
};

export default LandingContainerIllustration;
