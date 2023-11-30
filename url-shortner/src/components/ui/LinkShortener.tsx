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
    <div>
      <p>
        {longUrl}
        {shortUrl}
      </p>
    </div>
  );
};

const LinkShortener = () => {
  return (
    <div className="shortly pt-8">
      <div className="shortly-form relative z-0 overflow-hidden rounded-xl bg-primary-violet p-7">
        <BackgroundPattern />
        <form action="/" className="flex flex-col gap-10">
          <div className="relative">
            <input
              className="relative block w-full rounded-md px-2 py-3 placeholder:text-neutral-n1"
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
            className="btn-primary block w-full rounded-md py-3"
          >
            Shorten it!
          </button>
        </form>
      </div>
      <div className="loader"></div>
      <div className="shortly-links">
        <ShortLink longUrl="longUrl" shortUrl="shortUrl" />
      </div>
    </div>
  );
};

export default LinkShortener;
