class App extends React.Component {
  constructor(props) {
    super(props);
    this.setVideo = this.setVideo.bind(this);
    this.setArray = this.setArray.bind(this);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidUpdate() {
    // console.log('rerendered');
    // console.log(this.state);
    // this.setArray('cats');
    // this.render();
  }

  setArray(searchField) {
    this.setState({
      videos: searchField
    });
    // console.log('hello');
    // console.log(this.state.videos);
    // console.log('searchfield', searchField);
    // this.refreshPage();
  }

  setVideo(index) {
    this.setState({
      currentVideo: this.state.videos[index]
    });
  }

  // refreshPage() {
  //   window.location.reload();
    
  // }

  render() {
    console.log('hi!!!');
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search setArray={this.setArray}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer data={this.state.currentVideo}/>
        </div>
        <div id="poop"className="col-md-5">
          <VideoList data={this.state}
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


