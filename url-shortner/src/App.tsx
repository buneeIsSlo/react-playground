import { Header, Hero, MainContent, Cta, Footer } from "./components/layout";

const App = () => {
  return (
    <div className="h-full bg-zinc-800 text-neutral-100">
      <h1 className="text-3xl">Shortly - URL shortener</h1>
      <Header />
      <Hero />
      <MainContent />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
