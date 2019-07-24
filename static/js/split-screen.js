$('document').ready(function(){
	number_splits();
	
});





function calculate_number_splits() {
    // reference to 'scripts' select list 
	// used throughout the examples below
	var sel = document.getElementById('splits');

	// display value property of select list (from selected option)
	console.log( sel.value );
 	console.log(typeof(sel.value))
	var main = $('#main-zone');	
	main.empty();
	

	switch(sel.value) {
	  case "1":
	    // code block
	    console.log("two");
	    main.append("<div class='one'></div>");
	    break;
	  case "2":
	    // code block
	    console.log("two");
	    main.append("<div class='two'></div>");//<div class='two'></div>");
	    break;
	  case "4":
	    // code block
	    console.log("four");
	    main.append("<div class='four'></div><div class='four'>");//</div><div class='four'></div><div class='four'></div>");
	    break;

	  case "9":
	    // code block
	    console.log("four");
	    main.append("<div class='nine'></div><div class='nine'></div><div class='nine'></div>");
	    break;
	  default:
	    // code block
	    console.log("something wrong");
	} 

	
}


function number_splits() {
	calculate_number_splits();
	const urlParams = new URLSearchParams(window.location.search);
	const scrapUrl = urlParams.get('url');
	if (scrapUrl !== undefined && scrapUrl !== null) {
	  	scrapeVideos(scrapUrl);
	}
	else {
	 	//require load-video-json.js
		load_remote_videos_random();
	}

	
}
