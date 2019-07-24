// get all possibles div where can place videos
function getSelectorVideo(){
	var classDiv = $("#main-zone").children().attr('class');

	return "div."+classDiv;
}

$('document').ready(function(){

	
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  console.log('Great success! All the File APIs are supported.');
	} else {
	  console.log('The File APIs are not fully supported in this browser.');
	}


	$("#videos-input").change(function() {
		console.log("#videos-input");
	    // will log a FileList object, view gifs below
	    console.log(this.files);

	    // require split-screen.js
	    calculate_number_splits();

	    var listVideos = this.files;
	    globalVideoList = $.extend(true,{},listVideos); //var clonedObject = $.extend(true,{},yourObject);
	    //globalVideoList = listVideos.slice();
	    //listVideos = globalVideoList;
	    
	    var sel = document.getElementById('splits');
	    switch(sel.value) {
		  case "1":
		    // code block
		    $(getSelectorVideo()).each(function(index ) {
			  console.log( index + ": " + $( this ) + listVideos[index] );
			  $( this );
			  renderVideo(listVideos[index], $( this ))
			});
		    break;
		  case "2":
		    // code block
		    console.log("case 2");
		    $(getSelectorVideo()).each(function(index ) {
			  
			  console.log( 2*(index) + ": " + $( this ) + listVideos[2*(index)] );
		  	  console.log( 2*(index)+1 + ": " + $( this ) + listVideos[2*(index)+1] );
			  var selector = $( this );
			  renderVideo(listVideos[2*(index)], selector);
			  renderVideo(listVideos[2*(index)+1], selector);
			});
		    break;
		  case "4":
		    // code block
		    console.log("case 4");
		    var videos_inside = 2;
		    $(getSelectorVideo()).each(function(index ) {
			  
			  console.log( videos_inside*(index) + ": " + $( this ) + listVideos[videos_inside*(index)] );
		  	  console.log( videos_inside*(index)+1 + ": " + $( this ) + listVideos[videos_inside*(index)+1] );
			  var selector = $( this );
			  renderVideo(listVideos[videos_inside*(index)], selector, videos_inside*(index));
			  renderVideo(listVideos[videos_inside*(index)+1], selector, videos_inside*(index)+1);
			});
		    break;

		  case "9":
		    // code block
		    console.log("case 4");
		    var videos_inside = 3;
		    $(getSelectorVideo()).each(function(index ) {
			  
			  console.log( videos_inside*(index) + ": " + $( this ) + listVideos[videos_inside*(index)] );
		  	  console.log( videos_inside*(index)+1 + ": " + $( this ) + listVideos[videos_inside*(index)+1] );
			  var selector = $( this );
			  renderVideo(listVideos[videos_inside*(index)], selector);
			  renderVideo(listVideos[videos_inside*(index)+1], selector);
			  renderVideo(listVideos[videos_inside*(index)+2], selector);
			});
		    break;

		  default:
		    // code block
		    console.log("something wrong");
		}

	    
	    // grab the first image in the FileList object and pass it to the function
	    
	});
	
});



/*
big files
https://stackoverflow.com/questions/53237829/how-to-load-large-local-files-using-javascript
https://stackoverflow.com/questions/32172466/loading-mp3-as-arraybuffer-using-local-file-for-web-audio
*/

// render the image in our view
function renderVideo(file, selector, indice) {
  var stateNames = {};
  stateNames[FileReader.EMPTY]   = 'EMPTY';
  stateNames[FileReader.LOADING] = 'LOADING';
  stateNames[FileReader.DONE]    = 'DONE';
  
  // generate a new FileReader object
  var reader = new FileReader();
  console.log('Before read: ' + stateNames[reader.readyState]);
  reader.readAsArrayBuffer(file);
  var the_url = URL.createObjectURL(file); 
  console.log('After read: ' + stateNames[reader.readyState]);

  console.log(selector);
  selector = selector.closest("div")
  console.log(selector);
  selector.innerHTML ="<div><img src='static/img/lg.squiggly-text-preloader.gif'></div>";
  //selector.append("<video preload='auto' controls autoplay loop muted><source id='vid-source' src='"+the_url+"' ></video>")
 
  // inject an image with the src url
  reader.onload = function(event) {
  	console.log(event.target.result);
    //the_url = event.target.result
    console.log('After load: ' + stateNames[reader.readyState]);
    console.log(selector);
    selector.children('div').children('img').remove();
    console.log(selector);
    selector.append(`<div>
    	<img data-video="${indice}" onclick="nextVideoLocal(this)" class="video_overlays" src="static/img/shuffle-change-svgrepo-com.svg">\
		<img data-video="${indice}" class="video_overlays replay" src="static/img/repeat-svgrepo-com.svg">\
    	<video data-video="${indice}" preload='auto' controls autoplay loop muted>
    	<source id='vid-source' src='${the_url}' >
    	</video>
    	</div>`);

  }
  
  // when the file is read it triggers the onload event above.
  //reader.readAsDataURL(file);  
	
}



