import axios from "axios";

// pre configured axios instance

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID NQDapGunNYCS3kRNXBRhI7QhWBYRYO-wsBahqYGUIX4`,
  },
});
