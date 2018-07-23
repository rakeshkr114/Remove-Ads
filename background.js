// background.js

//Get message/data from content.js
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "setCount":
                temp = message.count;
				chrome.browserAction.setBadgeText({text: ""+temp});
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);





