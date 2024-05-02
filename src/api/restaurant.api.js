import api from "./base";

export default {
  list() {
    return api
      .get("restaurants")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data;
      });
  },
};
