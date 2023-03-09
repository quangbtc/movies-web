import axiosClient from "./configApi";
const SearchApi = {
  searchKeyword: (params) => {
    const url = "/search/keyword";
    return axiosClient.get(url, { params });
  },
  searchMovie: (params) => {
    const url = "/search/movie";
    return axiosClient.get(url, { params });
  },
  searchMulti: (params) => {
    const url = "/search/multi";

    return axiosClient.get(url, { params });
  },
  searchPerson: (params) => {
    const url = "/search/person";
    return axiosClient.get(url, { params });
  },
  searchTv: (params) => {
    const url = "/search/tv";
    return axiosClient.get(url, { params });
  },
  searchCollection: (params) => {
    const url = "/search/collection";
    return axiosClient.get(url, { params });
  },
};
export default SearchApi;
