class VideoList extends React.Component {
  constructor({data, setVideo}) {
    super(data);
    console.log('my data', data);

  } 

  entries () { 
    var myEntryArray = this.props.data.videos.map((video, index) => {
      return (<VideoListEntry
      picture={video.snippet.thumbnails}
      title={video.snippet.title}
      description={video.snippet.description} 
      index={index}
      setVideo={this.props.setVideo}/>
    
      );
    });  
    return myEntryArray;
  }
  //this.state = some default id
  
  render() {
    // console.log('video list render', this.props.data);
    // console.log(this.Entries);
    // console.log('videoList render');
    // console.log(this.props.data);
    // console.log(this.Entries);
    return (
      <div className="video-list media-middle">
        {this.entries()}
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



