import GENRES from "../constants/genres";

const getGenres = (genreIds = []) => {
  return GENRES.filter((genre) => genreIds.includes(genre.id))
    .map((genre) => genre.name)
    .join(", ");
};

const joinGenres = (genres = []) => {
  return genres.map((genre) => genre.name).join(", ");
};

const getDirector = (crew = []) => {
  return crew.filter((item) => item.job === "Director")[0].name;
};

const getTimeRunning = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

export { joinGenres, getGenres, getDirector, getTimeRunning, formatCurrency };
