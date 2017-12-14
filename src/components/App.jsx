class App extends React.Component {
  constructor(props) {
    super(props);
    this.setVideo = this.setVideo.bind(this);
    this.state = {
      currentVideo: exampleVideoData[0]
    };
  }

  setVideo(index) {
    this.setState({
      currentVideo: exampleVideoData[index]
    });
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer data={this.state.currentVideo}/>
        </div>
        <div id="poop"className="col-md-5">
          <VideoList data={exampleVideoData}
                     setVideo={this.setVideo}/>
        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<VideoList videos={window.exampleVideoData} />, document.getElementById('poop'));


