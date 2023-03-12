import axiosClient from "./configApi";
export const TypeTv={
    latest:"latest",
    airing_today:"airing_today",
    popular:"popular",
    onTheAir:"on_the_air",
    top_rated:"top_rated"
}
const TvApi = {
  getMoviesTv: (typeTv,params) => {
    let url =`/tv/${typeTv}`;
    return axiosClient.get(url, { params });
  },
};
export default TvApi;
