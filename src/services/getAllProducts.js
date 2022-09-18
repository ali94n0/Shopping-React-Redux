import http from "./httpService";

const getAllProducts = () => {
  return http.get("/product");
};

export default getAllProducts;
