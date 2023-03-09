import axiosClient from "./configApi";
const trendingApi = {
  getTrending: (media_type,window_time,params) => {
    let url = `/trending/${media_type}/${window_time}`;
    return axiosClient.get(url, { params });
  },
};
export default trendingApi;