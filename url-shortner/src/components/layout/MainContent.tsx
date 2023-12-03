import { LinkShortener } from "../ui";

const MainContent = () => {
  return (
    <section
      id="shortener"
      className="relative min-h-[80vh] bg-neutral-100 before:absolute before:left-0 before:top-0 before:h-[15vh] before:w-full before:bg-white before:lg:h-[16vh]"
    >
      <div className="container mx-auto">
        <LinkShortener />
      </div>
    </section>
  );
};

export default MainContent;
