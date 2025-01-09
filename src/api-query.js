import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";
const API_KEY = "pKIAwE9KyTsEnrob5fln_hxBalBluAFHdAGnBFGOt-k";

const galleryQuery = async (topic, page) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&query=${topic}&page=${page}`
  );

  return data;
};

export default galleryQuery;
