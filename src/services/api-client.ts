import axios from "axios";

//to create an access instence
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '53c21dd238be4d4ea5a0d1f2e8fa1764',
  },
});