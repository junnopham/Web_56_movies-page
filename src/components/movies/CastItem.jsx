import NoImage from "../../assets/images/no-image.png";

const CastItem = ({ actor }) => {
  const { name, profile_path, character } = actor;

  return (
    <div className="mt-8">
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : NoImage
        }
        alt={name}
        className="hover:opacity-75 transition ease-in-out duration-150"
      />
      <div className="mt-2">
        <span className="text-lg mt-2 hover:text-gray:300">{name}</span>
        <div className="text-sm text-gray-400">{character}</div>
      </div>
    </div>
  );
};

export default CastItem;
