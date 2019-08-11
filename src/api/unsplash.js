import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID db2c82feb26e6871cf4c02664b8d4e86ae606916f683a4671580d399a6852a40"
  }
});
