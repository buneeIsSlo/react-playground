
function App() {

  return (
    <div className="app px-8 pt-0.5 min-h-screen bg-brand-light-grey">
      <header className="app__header">
        <a href="#" className="app__logo"></a>
        <div className="app__nav"></div>
      </header>
      <div className="app__content h-screen grid grid-cols-1 grid-rows-2 outline outline-lime-400">
        <div className="app__illustartion outline outline-blue-600"></div>
        <div className="app__intro outline outline-red-400">
          <div className="app__intro-top">
            <span className="app__intro-pill">new</span>
            <span className="text-brand-mysterious-night">monograph dashboard</span>
          </div>
          <h1 className="app__intro-title text-brand-maritime-blue font-barlow-condensed font-black uppercase text-4xl">powerful insights <br></br> into your team</h1>
          <p className="app__intro-text text-lg font-barlow">Project planning and time tracking for agile teams</p>
          <div className="app__intro-bot">
            <button className="app__intro-cta">schedule a demo</button>
            <span>to see a preview</span>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default App
