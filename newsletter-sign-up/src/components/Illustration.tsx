import { illustrationDesktop, illustrationMobile } from "../assets/index";

export default function Illustration() {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={illustrationDesktop} />
      <img src={illustrationMobile} alt="Illustration" />
    </picture>
  );
}
