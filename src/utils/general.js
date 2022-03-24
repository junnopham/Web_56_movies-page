const randomColor = () => {
  const color = [
    "blue",
    "gray",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "indigo",
    "pink",
  ];
  return color[(color.length * Math.random()) | 0];
};

export { randomColor };
