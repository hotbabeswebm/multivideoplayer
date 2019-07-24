$('document').ready(function(){
	$("#images-input").change(function() {
		console.log("#images-input");
	    // will log a FileList object, view gifs below
	    console.log(this.files);


	    var listImages = this.files;

	    changeBackground(listImages);
	    
	});

});


function changeBackground(listImages){
	var text = '';

    for (i = 0; i < listImages.length-1; i++) {
    	console.log(listImages[i]);
    	var url = URL.createObjectURL(listImages[i]);
	  	text += 'url(' + url + '), ';
	} 

	url = URL.createObjectURL(listImages[listImages.length-1]);
	
	text += 'url(' + url + '); ';

	console.log(text);

    //document.getElementById("main-zone").style.backgroundImage = text; 
    
    //$('#main-zone').css("background-image", text);

    document.getElementById('main-zone').setAttribute('style', 'background-image: ' + text);
    
    // grab the first image in the FileList object and pass it to the function
}