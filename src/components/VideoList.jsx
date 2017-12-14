var VideoList = ({data}) => {
  var Entries = data.map((video) => {
    return (<VideoListEntry
    picture={video.snippet.thumbnails}
    title={video.snippet.title}
    description={video.snippet.description} />
    );
  });
  
  return (
    <div className="video-list media-middle">
      {Entries}
    </div>
  );
  
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;



