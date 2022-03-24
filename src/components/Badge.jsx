const Badge = ({ text, color }) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}
    >
      {text}
    </span>
  );
};

export default Badge;
