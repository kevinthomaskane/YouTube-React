import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  return (
    <div>
      <ul className="col-md-4 list-group">
      {props.videos.map((video, i) => {
        return <VideoListItem 
        key={video.etag} 
        onVideoClick={props.onVideoSelect}
        video={video} />
      })}
      </ul>
    </div>
  );
};

export default VideoList;
