// content.js

function removeAds() {
	var x = document.querySelectorAll('*[id^="google_ads_iframe"]');
	var count=x.length;
	
	//send number of ads blocked to the background.js to display on icon
	chrome.runtime.sendMessage({type: "setCount", count: count});

	// Iterate and remove ads
	for (var i = 0; i < count; i++) 
		x[i].remove();;
	
}
window.onload = removeAds;