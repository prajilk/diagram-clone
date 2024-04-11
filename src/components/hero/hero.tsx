import LightButton from "../common/button/light-button";

const Hero = () => {
  return (
    <div className="relative z-10">
      <div className="mx-auto flex w-full flex-col items-center py-24 lg:w-[600px]">
        <h1 className="title">
          Design tools <br className="lg:hidden" /> from the future.
        </h1>
        <p className="mb-5 text-center text-lg text-[#bdbdc0] lg:mb-10 lg:text-xl">
          Unleash your creativity with Diagram's <br /> AI-powered design tools.
        </p>
        <LightButton
          startIcon="/icons/logo.png"
          iconStyle="invert brightness-0"
        >
          Explore the feature
        </LightButton>
      </div>
    </div>
  );
};

export default Hero;
