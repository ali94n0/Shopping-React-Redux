import http from "./httpService";

const signupUser = (userData) => {
  return http.post("/user/register", userData);
};

export default signupUser;
