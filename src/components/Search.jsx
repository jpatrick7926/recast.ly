var Search = ({setArray}) => {
  // console.log('in search', setArray),
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button onClick={() => window.searchYouTube(document.getElementsByClassName('form-control')[0].value
, setArray)} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
// ReactDOM.render(<window.Search />, document.getElementById('search-bar'));
// document.getElementsByClassName('form-control')[0].value
