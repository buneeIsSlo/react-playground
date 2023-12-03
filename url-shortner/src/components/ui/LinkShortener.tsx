import { bgShortenDesktop, bgShortenMobile } from "../../assets/images";

const BackgroundPattern = () => {
  return (
    <picture className="absolute right-0 top-0 z-[-1]">
      <source media="(min-width: 1024px" srcSet={bgShortenDesktop} />
      <img src={bgShortenMobile} alt="" aria-hidden="true" />
    </picture>
  );
};

type TShortLink = {
  longUrl: string;
  shortUrl: string;
};

const ShortLink = ({ longUrl, shortUrl }: TShortLink) => {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-6">
      <p className="text-neutral-n4">{longUrl}</p>
      <hr className="md:hidden" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-5">
        <p className="text-primary-cyan">{shortUrl}</p>
        <button className="btn-primary w-full rounded-md py-2 md:min-w-[6em] lg:min-w-[6.6m]">
          Copy
        </button>
      </div>
    </div>
  );
};

const LinkShortener = () => {
  return (
    <div className="shortly pt-8">
      <div className="shortly-form relative z-0 overflow-hidden rounded-xl bg-primary-violet p-7 md:p-10 lg:p-14">
        <BackgroundPattern />
        <form action="/" className="flex flex-col gap-10 md:flex-row md:gap-6">
          <div className="relative flex-1">
            <input
              className="relative block w-full rounded-md px-2 py-3 text-neutral-n4 placeholder:text-neutral-n1 md:px-4 lg:px-6 lg:py-4"
              type="url"
              placeholder="Shorten links here..."
              required
            />
            <span className="absolute -bottom-5 left-0 text-xs text-primary-red">
              Please enter a valid link
            </span>
          </div>
          <button
            type="submit"
            className="btn-primary block w-full flex-[0.2] rounded-md py-3 lg:py-4"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <div className="loader"></div>
      <div className="shortly-links my-6 grid grid-cols-1 gap-6">
        <ShortLink longUrl="longUrl" shortUrl="shortUrl" />
        <ShortLink longUrl="longUrl" shortUrl="shortUrl" />
        <ShortLink longUrl="longUrl" shortUrl="shortUrl" />
        <ShortLink longUrl="longUrl" shortUrl="shortUrl" />
      </div>
    </div>
  );
};

export default LinkShortener;
