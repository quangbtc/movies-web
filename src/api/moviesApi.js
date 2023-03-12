import axiosClient from "./configApi";

export const TypeMovies = {
  upComing: "upcoming",
  top_rated: "top_rated",
  popular: "popular",
  now_playing: "now_playing",
  latest: "latest",
};
const MoviesApi = {
  getMoives: (typeMoive, params) => {
    const url = `/movie/${typeMoive}`;
    return axiosClient.get(url, { params });
  },
};
export default MoviesApi;
