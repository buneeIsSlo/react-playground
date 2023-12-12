import { LinkShortener } from "../ui";
import { iconBrand, iconRecords, iconCustom } from "../../assets/images";

type Tdata = {
  icon: string;
  title: string;
  desc: string;
};

const data: Tdata[] = [
  {
    icon: iconBrand,
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: iconRecords,
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: iconCustom,
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
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
        <div className="pb-8 pt-16 lg:pt-24">
          <div>
            <h2 className="text-center text-2xl font-bold text-neutral-n4 md:text-3xl lg:text-4xl">
              Advanced Statistics
            </h2>
            <p className="mx-auto max-w-[30ch] py-6 text-center text-neutral-n2 lg:max-w-[50ch]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="relative flex flex-col gap-28 py-24 before:absolute before:left-[50%] before:top-[20%] before:h-1/2 before:w-3 before:bg-primary-cyan lg:flex-row lg:items-start lg:gap-8 lg:before:left-0 lg:before:top-[45%] lg:before:h-3 lg:before:w-[70%]">
            {data.map((card, i) => (
              <article
                className={
                  "relative rounded-md bg-white px-6 pb-8 pt-14 shadow-sm lg:flex-1 lg:px-8"
                }
                style={{ marginTop: `${i * 40}px` }}
                key={card.title}
              >
                <span className="absolute -top-14 left-[40%] block w-fit rounded-full bg-primary-violet p-6 md:left-[45%] lg:left-[10%]">
                  <img
                    src={card.icon}
                    className="block"
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <h2 className="py-4 text-center text-xl font-bold lg:text-left">
                  {card.title}
                </h2>
                <p className="text-center text-neutral-n2 lg:text-left lg:text-base">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
