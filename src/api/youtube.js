import axios from "axios";

const KEY = "AIzaSyCUq1MZEDG7UwltKIZ-V-j87cb4uRZW4Fg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
