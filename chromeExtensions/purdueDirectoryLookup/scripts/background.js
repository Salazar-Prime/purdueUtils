// create context menu
chrome.contextMenus.create({
    id: "1",
    title: "Lookup Directory for \"%s\"",
    contexts: ["selection"],
});

//listerner for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // URL of the search page
    baseURL = "https://www.purdue.edu/directory/?searchString=";
    searchURL = baseURL + encodeURIComponent(info.selectionText);
    console.log(searchURL);
    // open the search page in a new tab
    chrome.tabs.create({ url: searchURL });
});

// https://www.purdue.edu/directory/?searchString=