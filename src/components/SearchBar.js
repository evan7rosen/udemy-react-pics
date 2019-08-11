import React from "react";

class SearchBar extends React.Component {
  state = {
    query: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </div>
          <button type="submit" className="ui primary button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
