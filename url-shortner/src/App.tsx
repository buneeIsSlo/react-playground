import { Header, Hero, MainContent, Cta, Footer } from "./components/layout";

const App = () => {
  return (
    <div className="h-full text-neutral-n4">
      <Header />
      <Hero />
      <MainContent />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
