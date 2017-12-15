// var searchYouTube = (options, callback) => {
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//       maxResults: '5',
//       part: 'snippet',
//       q: options,
//       type: 'GET',
//       key: window.YOUTUBE_API_KEY,
//     },
//     success: function(data) {
//       // window.videosArray = data.items;
//       callback(data.items);
//       // setVideo()
//     }
//   });
// };

var searchYouTube = (options, callback) => {
  // var request = gapi.client.youtube.search.list({
  //   q: options,
  //   part: 'snippet'
  // });
  // $.get('https://www.googleapis.com/youtube/v3/search', request, function(data) {
  //   callback(data.items);
  // });
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: window.YOUTUBE_API_KEY,
    q: options,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: true
  })

  .done(({items}) => {
    console.log('my callback', callback);
    if (callback) {
      callback(items);
      console.log('we got it!!!');
    }
  });
};

window.searchYouTube = searchYouTube;
