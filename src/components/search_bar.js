import React, { Component } from "react";

class SearchBar extends Component {

  state= {
    term: ""
  }
  

  onChange = (term) => {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input 
        name="term" 
        onChange={e => this.onChange(e.target.value)} 
        value={this.state.term}/>
      </div>
    );
  }
}

export default SearchBar;
