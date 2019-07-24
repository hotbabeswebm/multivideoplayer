/*

function categoryController($scope, $http) {
    var url = "/api/videolist/porn_videosgifs.json";
    $http.get(url).success(function (response) {
        $scope.videos = response;
    });
}

*/

function sel_video(number, vjson){
	var maxb = 0;
	var video = false;
	try{
		for (i=0; i<vjson[number].video_info.variants.length; i++){
			if (vjson[number].video_info.variants[i].content_type == "video/mp4"){
				if (maxb < vjson[number].video_info.variants[i].bitrate){
					maxb = vjson[number].video_info.variants[i].bitrate;
					video = vjson[number].video_info.variants[i].url;
				}
			}
		}
	}
	catch(error){
		;
	}
	console.log(video);
	return video
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    json: ["loading"],
    videos1: [1,2],
    videos2: [2,3]
  },
  delimiters: ['[[',']]']
});




function load_remote_videos_random(){
	console.log("video")
	$.getJSON('/api/videolist/porn_videosgifs.json', function (json) {
	    app.json = json;
	    console.log(json);

	    var data = app.json;

		var number_videos = data.length - 1;

		var chosen;
		var url_videos = [];

		while (data.length > 0){

			chosen = Math.floor(Math.random() * data.length);
			var video = sel_video(chosen, data);
			url_videos.push(video);
			data.splice(chosen, 1);
		}
		console.log("app.videos1");

		// require external-videos-load.js
		loadVideosList(url_videos);
		app.videos1 = url_videos.splice(0,);
		app.videos2 = url_videos;

		console.log("app.videos1");
		console.log(app.videos1);
		console.log("app.videos2");
		console.log(app.videos2);
	});
}


/*

var dataURL = 'https://jsonplaceholder.typicode.com/posts';

var App = new Vue({
  el: '#app',
  data: {
    posts: [] // initialize empty array
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    $.getJSON(dataURL, function(data) {
      self.posts = data;
    });
  }
})

*/