import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  searchSubmit = async term => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term, per_page: 25 }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleSubmit={this.searchSubmit} />
        Found {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
