const TextSection = ({
  titlel1,
  titlel2,
  text,
  link = "",
}: {
  titlel1: string;
  titlel2: string;
  text: string;
  link?: string;
}) => {
  return (
    <div className="bg-inherit grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0">
      <div className="col-span-1">
        <h2 className="font-bold font-[SatoshiBold] text-5xl uppercase">
          <span className="text-outline">{titlel1}</span>
          <br />
          {titlel2}
        </h2>
      </div>

      <div className="col-span-2">
        <p className="text-opacity-[0.6] text-lg text-justify">{text}</p>
        {link ? (
          <a
            href={link}
            className="text-gray-500 text-base hover:cursor-pointer hover:underline"
          >
            Learn More
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default TextSection;
