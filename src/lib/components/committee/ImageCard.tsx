const ImageCard = ({
  src,
  name,
  occupation,
}: {
  src: string;
  name: string;
  occupation: string;
}) => {
  return (
    <div className="flex flex-col sm:w-52">
      <img src={src} alt={name} className="rounded-lg h-44 sm:h-56" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-sm text-gray-400">{occupation}</p>
    </div>
  );
};

export default ImageCard;
