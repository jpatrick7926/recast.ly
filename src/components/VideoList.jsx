class VideoList extends React.Component {
  constructor({data, setVideo}) {
    super(data);
    console.log(setVideo);
    this.Entries = data.map((video, index) => {
      return (<VideoListEntry
      picture={video.snippet.thumbnails}
      title={video.snippet.title}
      description={video.snippet.description} 
      index={index}
      setVideo={setVideo}/>
      
      );
    });
  } 
  //this.state = some default id
  
  render() {
    return (
      <div className="video-list media-middle">
        {this.Entries}
      </div>
    );
  }
}

  // onVideoListEntryClick() {
  //   //the instance of the video player states changes to the id that shares the title of the item we clicked
  // }
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;



