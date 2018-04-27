// content.js

function removeAds() {
	var x = document.querySelectorAll('*[id^="google_ads_iframe"]');
	//console.log("1: "+x);
	//console.log("2: "+x.length);

	for (var i = 0; i < x.length; i++) 
		x[i].remove();;
	
}
window.onload = removeAds;