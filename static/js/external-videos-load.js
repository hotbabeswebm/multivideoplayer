var globalVideoList;

function loadVideosUrl(){
	var listVideos = $("#url-list").val().split('\n');
	loadVideosList(listVideos);
}

// get all possibles div where can place videos
function getSelectorVideo(){
	var classDiv = $("#main-zone").children().attr('class');

	return "div."+classDiv;
}


function loadVideosList(listVideos){

	globalVideoList = listVideos.slice();

	console.log("loadVideosList");
	console.log(listVideos);

	var sel = document.getElementById('splits');
	switch(sel.value) {
	  case "1":
		// code block
		$(getSelectorVideo()).each(function(index ) {
		  console.log( index + ": " + $( this ) + listVideos[index] );
		  var videos_inside = 1;
		  var selector = $( this );
		  var html_video_1 = `<div>
								<img data-video="video${videos_inside*(index)}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index)}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)]}" ></video>
							<div>`
		  selector.append(html_video_1);
		});
		break;
	  case "2":
		// code block
		$(getSelectorVideo()).each(function(index ) {
		  console.log( 2*(index) + ": " + $( this ) + listVideos[2*(index)] );
		  console.log( 2*(index)+1 + ": " + $( this ) + listVideos[2*(index)+1] );
		  var selector = $( this );
		  var videos_inside = 1;
		  var html_video_1 = `<div>
								<img data-video="video${videos_inside*(index)}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index)}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)]}" ></video>
							<div>`

		  var html_video_2 = `<div>
								<img data-video="video${videos_inside*(index)+1}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)+1}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index)+1}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)+1]}" ></video>
							<div>`


		  selector.append(html_video_1);
		  selector.append(html_video_2);

		});
		break;
	  case "4":
		// code block
		$(getSelectorVideo()).each(function(index ) {
		  console.log("index: " + index);
		  console.log( 2*(index) + ": " + $( this ) + listVideos[2*(index)] );
		  console.log( 2*(index)+1 + ": " + $( this ) + listVideos[2*(index)+1] );

		  console.log("end")
		  var selector = $( this );
		  var html_video_1 = `<div>
								<img data-video="${2*(index)}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="${2*(index)}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="${2*(index)}"preload="auto" controls autoplay loop muted><source src="${listVideos[2*(index)]}" ></video>
							<div>`

		  var html_video_2 = `<div>
								<img data-video="${2*(index)+1}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="${2*(index)+1}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="${2*(index)+1}" preload="auto" controls autoplay loop muted><source src="${listVideos[2*(index)+1]}" ></video>
							<div>`
		  
		  selector.append(html_video_1);
		  selector.append(html_video_2);

		});
		break;

	case "9":
		// code block
		$(getSelectorVideo()).each(function(index ) {
		  var videos_inside = 3;
		  console.log("index: " + index);
		  console.log( videos_inside*(index) + ": " + $( this ) + listVideos[videos_inside*(index)] );
		  console.log( videos_inside*(index)+ 1 + ": " + $( this ) + listVideos[videos_inside*(index)+1] );
		  console.log( videos_inside*(index)+ 2 + ": " + $( this ) + listVideos[videos_inside*(index)+2] );
		  var selector = $( this );
		  var html_video_1 = `<div>
								<img data-video="video${videos_inside*(index)}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index)}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)]}" ></video>
							<div>`

		  var html_video_2 = `<div>
								<img data-video="video${videos_inside*(index)+1}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)+1}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index) +1}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)+1]}" ></video>
							<div>`

		  var html_video_3 = `<div>
								<img data-video="video${videos_inside*(index)+2}" onclick="nextVideo(this)" class="video_overlays" src="/static/img/shuffle-change-svgrepo-com.svg">\
								<img data-video="video${videos_inside*(index)+2}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
								<video data-video="video${videos_inside*(index)+2}" preload="auto" controls autoplay loop muted><source src="${listVideos[videos_inside*(index)+2]}" ></video>
							<div>`
		  
		  selector.append(html_video_1);
		  selector.append(html_video_2);
		  selector.append(html_video_3);

		});
	  break;
	  default:
		// code block
		console.log("something wrong");
	}

	
}

	
