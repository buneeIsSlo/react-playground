export default function Intro() {
    return (
    <div className="app min-h-screen bg-white">
      <header className="app__header">
        <a href="#" className="app__logo"></a>
        <div className="app__nav"></div>
      </header>
      <div className="app__content h-screen grid grid-cols-1 grid-rows-[55%] [45%]">
        <div className="app__illustration flex justify-end">
          <div className="h-full w-full flex items-center sm:justify-center overflow-hidden relative before:absolute before:right-0 before:h-full before:w-1/2 before:bg-brand-light-grey before:rounded-bl-[3.5rem]">
            <img className="scale-150 absolute sm:relative right-[-60px] max-h-[160px] mt-20" src="/public/images/illustration-devices.svg" alt="" />
          </div>
        </div>
        <div className="app__intro px-8 mt-4">
          <div className="app__intro-top mt-4 flex items-center gap-4">
            <span className="app__intro-pill text-brand-light-grey font-barlow-condensed font-bold uppercase bg-brand-maritime-blue px-3 py-0.4 rounded-full">new</span>
            <span className="text-brand-grey text-sm font-barlow-condensed uppercase tracking-[0.3em]">monograph dashboard</span>
          </div>
          <h1 className="app__intro-title text-brand-maritime-blue mt-4 font-barlow-condensed font-black uppercase text-4xl">powerful insights <br></br> into your team</h1>
          <p className="app__intro-text text-lg mt-4 text-brand-mysterious-night font-barlow max-w-[28ch]">Project planning and time tracking for agile teams</p>
          <div className="app__intro-bot mt-4 flex items-center gap-5">
            <button className="app__intro-cta bg-brand-tomato font-barlow-condensed py-2 px-6 font-bold uppercase text-brand-light-grey rounded-md">schedule a demo</button>
            <span className="text-brand-grey text-sm font-barlow-condensed uppercase tracking-widest">to see a preview</span>
          </div>
        </div>      
      </div>
    </div>
    );
}