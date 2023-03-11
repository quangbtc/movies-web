import axiosClient from "./configApi";
const configgration = {
  getLanguages: (params) => {
    let url = "/configuration/languages";
    return axiosClient.get(url, { params });
  },
};
export default configgration;
