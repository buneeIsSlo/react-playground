import './App.scss';

import Card from './components/Card';

function App() {
  return (
    <main>
      <div className="app">
        <h1 style={{ opacity: 0, width: 0 }}>Please rate us</h1>
        <Card />
      </div>
    </main>
  );
}

export default App;
