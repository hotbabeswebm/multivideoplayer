function toggleMuteVideo(){
	console.log( "mute/unmuted");
	if( $("video").prop('muted') ) {
        $("video").prop('muted', false);
    } else {
      	$("video").prop('muted', true);
    }
}

function pausePlayVideo(){
    console.log( "pause/play");
    if( $("video").prop('paused') ) {
        $("video").trigger("play");
    } else {
        $("video").trigger("pause");
    }

}

$('document').ready(function(){
	/*
	var figure = $("#main-zone div video"); 
	figure.mouseenter( hoverVideo);
	figure.mouseleave(hideVideo );
	*/
});


function nextVideo(video){
    //external-video-list.js
    //globalVideoList;

    var newVideo = globalVideoList[Math.floor(Math.random() * globalVideoList.length)];

    var dataVideo = video.getAttribute("data-video");

    var element = document.body.querySelector('video[data-video="' + dataVideo + '"]');

    console.log(globalVideoList);
    console.log(newVideo);


    element.querySelector("source").setAttribute("src", newVideo);
    element.load();
    element.play();

}

function nextVideoLocal(video){
    //external-video-list.js
    //globalVideoList;
    console.log("globalVideoList");
    console.log(globalVideoList);
    var newVideo = globalVideoList[Math.floor(Math.random() * globalVideoList.length)];

    var dataVideo = video.getAttribute("data-video");

    var element = $('video[data-video="' + dataVideo + '"]').closest("div").closest("div");

    
    console.log(newVideo);


    //element.querySelector("source").setAttribute("src", newVideo);
    renderVideo(newVideo, element, dataVideo)
    //element.load();
    //element.play();

}

function hoverVideo(e) {  
    var current = $(this).attr('id');
    $("img[data-video='" + current +"']").addClass("visible");//.show();
}

function hideVideo(e) {
    var current = $(this).attr('id');
    console.log(current);
    var elem = $("img[data-video='" + current +"']");
    console.log(!elem.is(":hover"));
    /*
    if ( !(elem.is(":hover")) ) {
    	//elem.hide();
    	elem.removeClass("visible");
    	console.log("hide");
    }  
	*/
    if ( $(":hover").filter($(".visible")).length < 1 ) {
    	//elem.hide();
    	elem.removeClass("visible");
    	console.log("hide");
    } 
    
}