import { illusWorking } from "../../assets/images/index";

const Hero = () => {
  return (
    <section id="hero" className="w-full overflow-hidden">
      <div className="lg:just-end container mx-auto flex w-[95%] flex-col justify-center py-6 lg:relative lg:flex-row-reverse lg:items-center lg:py-8">
        <div className="hero-illus lg:relativ mt-4 grid place-content-center lg:flex-1">
          <img
            src={illusWorking}
            className="ml-40 block w-[120vw] max-w-[500px] md:mx-auto md:max-w-[550px] lg:-mr-[20em] lg:max-w-[700px] xl:-mr-[25em] xl:max-w-[800px]"
            alt="Illustration of woman working on the computer"
          />
        </div>
        <div className="text-center md:mx-auto md:max-w-[70%] lg:h-fit lg:flex-1 lg:text-left">
          <h1 className="mt-5 text-4xl font-bold md:text-5xl lg:max-w-[15ch] lg:leading-[1.2] xl:text-7xl xl:leading-tight">
            More than just shorter links
          </h1>
          <p className="mx-auto mt-5 max-w-[30ch] text-lg text-neutral-n2 md:max-w-[50ch] lg:mt-2 xl:ml-0 xl:max-w-[40ch] xl:text-xl">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <a
            href="#"
            className="btn-primary mx-auto mt-8 block w-fit rounded-full px-12 py-4 font-bold lg:ml-0 lg:mt-10"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
