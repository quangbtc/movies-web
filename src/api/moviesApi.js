import axiosClient from "./configApi";
const MoviesApi = {
  getUpcomming: (params) => {
    const url = "/movie/upcoming";
    return axiosClient.get(url, { params });
  },
  getTopRate: (params) => {
    const url = "/movie/top_rated";
    return axiosClient.get(url, { params });
  },
  getPopular: (params) => {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },
  getNowPlaying: (params) => {
    const url = "/movie/now_playing";
    return axiosClient.get(url, { params });
  },
  getLatest: (params) => {
    const url = "/movie/latest";
    return axiosClient.get(url, { params });
  },
};
export default MoviesApi;
