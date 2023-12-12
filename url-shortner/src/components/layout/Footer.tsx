import { logo } from "../../assets/images";

type TfooterLinks = {
  title: string;
  links: string[];
};

const footerLinks: TfooterLinks[] = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-n4 py-14 lg:py-20">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="shortly" />
          </a>
        </div>
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-24">
          {footerLinks.map((item) => (
            <div className="">
              <h4 className="text-center font-bold text-white lg:text-left">
                {item.title}
              </h4>
              <ul className="pt-4">
                {item.links.map((link) => (
                  <li className="mt-6 text-center text-neutral-n1 lg:text-left">
                    <a href="#" className="hover:text-primary-cyan">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
