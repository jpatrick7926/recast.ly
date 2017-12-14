class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.videos = exampleVideoData;
  }
  render() {
    return (
      <div className="video-list">
      <VideoListEntry video={this.videos[0]} />
      <VideoListEntry video={videos[1].snippet.title} description={videos[1].snippet.description}/>
      <VideoListEntry video={videos[2].snippet.title} description={videos[2].snippet.description}/>
      <VideoListEntry video={videos[3].snippet.title} description={videos[3].snippet.description}/>
      <VideoListEntry video={videos[4].snippet.title} description={videos[4].snippet.description}/>
      </div>
    );
  }
  
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
console.log(VideoListEntry);



