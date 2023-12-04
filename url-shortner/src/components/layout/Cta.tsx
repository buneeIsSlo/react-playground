import { bgBoostDesktop, bgBoostMobile } from "../../assets/images";

const CtaBackgroundPattern = () => {
  return (
    <picture className="absolute right-0 top-0 z-[-1] lg:top-[15%] lg:scale-[1.6] xl:scale-[1.4]">
      <source media="(min-width: 1024px)" srcSet={bgBoostDesktop} />
      <img src={bgBoostMobile} alt="" aria-hidden="true" />
    </picture>
  );
};

const Cta = () => {
  return (
    <section
      id="cta"
      className="relative z-0 w-full overflow-hidden bg-primary-violet"
    >
      <div className="container mx-auto w-full py-20">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Boost your links today
        </h2>
        <a className="btn-primary mx-auto mt-5 block w-fit rounded-full px-12 py-4 font-bold">
          Get Started
        </a>
      </div>
      <CtaBackgroundPattern />
    </section>
  );
};

export default Cta;
