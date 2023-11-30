import { LinkShortener } from "../ui";

const MainContent = () => {
  return (
    <section id="shortener" className="min-h-[80vh] bg-blue-500">
      <div className="container mx-auto">
        <LinkShortener />
      </div>
    </section>
  );
};

export default MainContent;
