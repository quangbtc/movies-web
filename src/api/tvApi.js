import axiosClient from "./configApi";
const TvApi = {
  getLatest: (params) => {
    let url = "/tv/latest";
    return axiosClient.get(url, { params });
  },
  getTvAiringToday: (params) => {
    let url = "/tv/airing_today";
    return axiosClient.get(url, { params });
  },
  getPopular: (params) => {
    let url = "/tv/popular";
    return axiosClient.get(url, { params });
  },
};
export default TvApi;
