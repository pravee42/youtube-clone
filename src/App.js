import React, { Component } from "react";
import "./styles.css";
import SearchData from "./SearchData";
import api from "./api";
import VideosList from "./videosList";

const KEY = "AIzaSyAf-5Kx_4fbYAHGMg8ezSgTitDLYD2eUkw";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  handlesubmit = async (searchValue) => {
    const response = await api.get("/search", {
      params: {
        q: searchValue,
        part: "snippet",
        maxResults: 20,
        key: KEY
      }
    });
    const responseArr = response.data.items;
    // const firstVideo =
    //   responseArr[0].id.kind !== "youtube#channel"
    //     ? responseArr[0]
    //     : responseArr[1];
    this.setState({
      videos: responseArr
    });
    // setSelectedVideo(firstVideo);
  };

  render() {
    return (
      <div className="App">
        <div className="poo">
          <SearchData handleFormSubmit={this.handlesubmit} />
        </div>
        <VideosList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
