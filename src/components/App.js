import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  async onTermSubmit(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={(event) => this.onTermSubmit(event)} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
