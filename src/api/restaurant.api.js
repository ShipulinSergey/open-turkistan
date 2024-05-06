import api from "./base";

export default {
  list(next) {
    let url = next ? 'restaurants?page=' + next : 'restaurants'
    return api
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data;
      });
  },
};
