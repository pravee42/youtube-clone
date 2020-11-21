import axios from "axios";

const key = "AIzaSyAf-5Kx_4fbYAHGMg8ezSgTitDLYD2eUkw";

export default axios.create({
  baseURl: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 100,
    key: key
  }
});
