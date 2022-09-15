import http from "./httpService";

const signinUser = (userData) => {
  return http.post("/user/login", userData);
};

export default signinUser;
