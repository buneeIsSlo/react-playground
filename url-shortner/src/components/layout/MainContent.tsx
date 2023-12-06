import { LinkShortener } from "../ui";
import { iconBrand, iconRecords, iconCustom } from "../../assets/images";

interface Idata {
  icon: string;
  title: string;
  desc: string;
}

const data: Idata[] = [
  {
    icon: iconBrand,
    title: "title",
    desc: "description",
  },
  {
    icon: iconRecords,
    title: "title",
    desc: "description",
  },
  {
    icon: iconCustom,
    title: "title",
    desc: "description",
  },
];

const MainContent = () => {
  return (
    <section
      id="shortener"
      className="relative min-h-[80vh] bg-neutral-100 before:absolute before:left-0 before:top-0 before:h-[15vh] before:w-full before:bg-white before:lg:h-[16vh]"
    >
      <div className="container mx-auto">
        <LinkShortener />
        <div>
          <div>
            <h2 className="text-center text-2xl font-bold text-neutral-n4 md:text-3xl lg:text-4xl">
              Advanced Statistics
            </h2>
            <p className="mx-auto max-w-[30ch] py-6 text-center text-neutral-n2">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="flex flex-col gap-20">
            {data.map((card) => (
              <article className="relative rounded-sm bg-white px-2 pt-14">
                <span className="absolute -top-14 left-[45%] block w-fit rounded-full bg-primary-violet p-6">
                  <img
                    src={card.icon}
                    className="block"
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-center text-xl font-bold">{card.title}</h2>
                <p className="text-center">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
