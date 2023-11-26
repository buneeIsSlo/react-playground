import { illusWorking } from "../../assets/images/index";

const Hero = () => {
  return (
    <section id="hero" className="w-full overflow-hidden">
      <div className="container mx-auto flex w-[95%] flex-col justify-center gap-2 outline lg:flex-row-reverse">
        <div className="hero-illus mt-4 grid place-content-center">
          <img
            src={illusWorking}
            className="md:mx-auto md:max-w-[550px] ml-40 block w-[120vw] max-w-[500px]"
            alt="Illustration of woman working on the computer"
          />
        </div>
        <div className="hero-text md:max-w-[70%] md:mx-auto text-center lg:text-left">
          <h1 className="md:text-5xl mt-5 text-4xl font-bold">
            More than just shorter links
          </h1>
          <p className="md:max-w-[50ch] mx-auto mt-5 max-w-[30ch] text-lg">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <a
            href="#"
            className="mx-auto mt-8 block w-fit rounded-full bg-primary-cyan px-12 py-4 font-bold text-neutral-100 lg:ml-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
