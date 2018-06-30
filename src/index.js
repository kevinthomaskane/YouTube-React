import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyDhMbK-iWOty8oShHQInwdWuZsBmOKq2j8";

//create a new component
//some html
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.videoSearch("kodak black")
  }
    

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }
  

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}
// take this component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
