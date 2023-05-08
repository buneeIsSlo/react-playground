
function App() {

  return (
    <div className="app px-8 pt-0.5 min-h-screen bg-white">
      <header className="app__header">
        <a href="#" className="app__logo"></a>
        <div className="app__nav"></div>
      </header>
      <div className="app__content h-screen grid grid-cols-1 grid-rows-2">
        <div className="app__illustartion bg-brand-light-grey"></div>
        <div className="app__intro">
          <div className="app__intro-top mt-4 flex items-center gap-4">
            <span className="app__intro-pill text-brand-light-grey font-barlow-condensed font-bold uppercase bg-brand-maritime-blue px-3 py-0.4 rounded-full">new</span>
            <span className="text-brand-grey font-barlow-condensed uppercase tracking-widest">monograph dashboard</span>
          </div>
          <h1 className="app__intro-title text-brand-maritime-blue mt-4 font-barlow-condensed font-black uppercase text-4xl">powerful insights <br></br> into your team</h1>
          <p className="app__intro-text text-lg mt-4 text-brand-mysterious-night font-barlow max-w-[28ch]">Project planning and time tracking for agile teams</p>
          <div className="app__intro-bot mt-4 flex items-center gap-5">
            <button className="app__intro-cta bg-brand-tomato font-barlow-condensed py-2 px-6 font-bold uppercase text-brand-light-grey rounded-md">schedule a demo</button>
            <span className="text-brand-grey font-barlow-condensed uppercase">to see a preview</span>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default App
