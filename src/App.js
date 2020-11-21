import React, { Component } from "react";
import "./styles.css";
import SearchData from "./SearchData";
import api from "./api";
import videosList from "./videosList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  handlesubmit = async (searchValue) => {
    const videosData = await api.get("/search", {
      params: {
        q: searchValue
      }
    });
    this.setState({
      videos: videosData.data.items
    });
    console.log(this.state.videos);
    console.log(videosData);
  };

  render() {
    return (
      <div className="App">
        <div className="poo">
          <SearchData handleFormSubmit={this.handlesubmit} />
        </div>
        <videosList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
