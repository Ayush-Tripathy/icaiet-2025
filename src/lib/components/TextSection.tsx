const TextSection = ({
  titlel1,
  titlel2,
  text,
}: {
  titlel1: string;
  titlel2: string;
  text: string;
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
      </div>
    </div>
  );
};

export default TextSection;
