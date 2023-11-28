import { illusWorking } from "../../assets/images/index";

const Hero = () => {
  return (
    <section id="hero" className="w-full overflow-hidden lg:min-h-[80vh]">
      <div className="lg:just-end container mx-auto flex w-[95%] flex-col justify-center gap-2 bg-red-500 outline lg:relative lg:flex-row-reverse lg:items-center">
        <div className="hero-illus lg:relativ mt-4 grid place-content-center lg:flex-1">
          <img
            src={illusWorking}
            className="ml-40 block w-[120vw] max-w-[500px] md:mx-auto md:max-w-[550px] lg:-mr-[40em] lg:max-w-[700px] xl:-mr-[30em] xl:max-w-[800px]"
            alt="Illustration of woman working on the computer"
          />
        </div>
        <div className="hero-text text-center outline outline-red-300 md:mx-auto md:max-w-[70%] lg:h-fit lg:flex-1 lg:text-left">
          <h1 className="mt-5 text-4xl font-bold md:text-5xl xl:text-7xl">
            More than just shorter links
          </h1>
          <p className="mx-auto mt-5 max-w-[30ch] text-lg md:max-w-[50ch] xl:ml-0 xl:max-w-[40ch]">
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
