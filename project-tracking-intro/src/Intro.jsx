export default function Intro() {
  return (
    <div className="app min-h-screen bg-white">
      <div className="app__content h-screen grid grid-cols-1 grid-rows-[55%] [45%] lg:grid-cols-2 lg:grid-rows-1">
        <div className="app__illustration flex justify-end">
          <div className="h-full w-full flex items-center sm:justify-center overflow-hidden relative before:absolute before:right-0 lg:before:top-0 before:h-full lg:before:h-[55%] before:w-1/2 lg:before:w-full before:bg-brand-light-grey before:rounded-bl-[3.5rem]">
            <img
              className="scale-150 lg:scale-[3] absolute sm:relative right-[-60px] lg:right-[-10rem] max-h-[160px] mt-20"
              src="/public/images/illustration-devices.svg"
              alt=""
            />
          </div>
        </div>
        <div className="app__intro px-8 mt-4 lg:row-start-1 lg:row-end-3 md:grid md:place-content-center">
          <div className="app__intro-top mt-4 flex items-center gap-4">
            <span className="app__intro-pill text-sm lg:text-base text-brand-light-grey font-barlow-condensed font-bold uppercase bg-brand-maritime-blue px-3 py-0.4 rounded-full">
              new
            </span>
            <span className="text-brand-grey text-sm lg:text-base font-barlow-condensed uppercase tracking-[0.3em]">
              monograph dashboard
            </span>
          </div>
          <h1 className="app__intro-title text-brand-maritime-blue mt-4 font-barlow-condensed font-black uppercase text-4xl lg:text-7xl">
            powerful insights <br></br> into your team
          </h1>
          <p className="app__intro-text text-lg mt-4 lg:mt-7 text-brand-mysterious-night font-barlow max-w-[28ch]">
            Project planning and time tracking for agile teams
          </p>
          <div className="app__intro-bot mt-4 lg:mt-16 flex items-center gap-5">
            <button className="app__intro-cta bg-brand-tomato hover:bg-brand-tomato/80 font-barlow-condensed py-2 px-6 text-lg font-bold uppercase text-brand-light-grey rounded-md focus-visible:outline-2 focus-visible:outline-brand-mysterious-night focus-visible:outline-offset-4">
              schedule a demo
            </button>
            <span className="text-brand-grey text-sm lg:text-base font-barlow-condensed uppercase tracking-widest">
              to see a preview
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
