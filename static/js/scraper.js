/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var webms = [];
var result = false;
var corsUrl = "https://cors-anywhere.herokuapp.com/";

function scrapes(url, expression, search, callback){
	//var url = "http://boards.4chan.org/gif/thread/15247834/post-your-all-time-favorite-webms";
	//var final = "https://crossorigin.me/" + encodeURIComponent(url);

	//console.log(final);

	//var originalURL = "https://some-api-without-cors?api_key=foo&param1=val1";
	var queryURL = corsUrl + url;



	$.get(queryURL, function(response) {
		console.log('CORS anywhere response', response);
		if (url.includes("https")){
			var protocol = "https://";
		} else if(url.includes("http")){
			var protocol = "http://";
		}
		//href(.*?)\.webm"/
		//var urls = response.match(expression);

		//var j = response.match(expression);

		//console.log(j);
		webms = [];
		var c = $(response).find(search).each(function(){
			var d = $(this).attr('href').match(expression);
			console.log(d);
			if (d !== null){
				var link = d[0];
				if (!link.includes(protocol)){
					if (link.startsWith("//")){
						link = link.replace("//", protocol);
					} else{
						link = protocol  + link;
					}
					
				}
				if (!(webms.indexOf(link) > -1)){
					webms.push(link);
				}
				
				
			}
		});

		webms = shuffle(webms);
		console.log(webms);
		// require split-screen.js
    	result= true;
    	if (callback) {
        	callback();
    	}
    	
	}).fail(function() {
	    alert('url not valid'); // or whatever
	    result = false;
	    if (callback) {
        	callback();
    	}
	});
	
	

}


function scrapeVideos(url){
	if (url === undefined || url === null) {

        url = $("#url-scrape").val();

    }
	 



	var expression = /.*\.webm/;
	var search = 'a';

	scrapes(url, expression, search, function(response) {
		console.log(webms);
		if (webms){
			if (result){
				calculate_number_splits();
				loadVideosList(webms);
			}	
		}
		var ifttt = "https://maker.ifttt.com/trigger/url_video_scrape/with/key/dNEdd23T3_CVkzRVryKZg9yvciW9w-mhU574pzHugUS";


		//var urlstats = 'https://cors-anywhere.herokuapp.com/' + 'http://gd.geobytes.com/GetCityDetails';
		$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
			//var datos = JSON.stringify(data, null, 2);
			console.log(data);
			console.log(data.geobytesremoteip);
			
			$.post(corsUrl+ifttt, { "value1" : url, "value2" : data.geobytesremoteip, "value3" : result } , function(result){
			    $("span").html(result);
			});
			
		});
	});		

}




function scrapesCatalog(url, expression, callback){
	var queryURL = "https://cors-anywhere.herokuapp.com/" + url;

	var result;

	$.get(queryURL, function(response) {
		console.log('CORS anywhere response', response);

		var j = response.match(expression);
		console.log(j);
		var obj = JSON.parse(j); 
		console.log(obj);
		
		

		webms = shuffle(webms);
		console.log(webms);
		// require split-screen.js
    	result= webms;
    	
		if (callback) {
        	callback();
    	}

	}).fail(function() {
	    alert('url not valid'); // or whatever
	    result = false;
	});

}


function scrapeThreads(){
	var url = "http://boards.4chan.org/s/";
	var expression = /.*/
	var search = 'a.replylink';

	scrapes(url, expression, search, function(response) {
		console.log(webms);
		//"http://boards.4chan.org/s/"
	});			

}


function scrapeImages(){
	var url = "http://boards.4chan.org/s/thread/18989671/post-golden-girls-either-kind";
	var expression = /.*/
	var search = 'a.fileThumb';

	scrapes(url, expression, search, function(response) {
		console.log(webms);
		webms = webms.slice(0,4)
		console.log(webms);
		changeBackground(webms);
		
	});			

}


