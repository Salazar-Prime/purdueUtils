// create context menu
chrome.contextMenus.create({
    id: "1",
    title: "Lookup Directory for \"%s\"",
    contexts: ["selection"],
});

//listerner for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // URL of the search page
    baseURL = "https://www.purdue.edu/directory";
    chrome.tabs.create({ url: baseURL });
    // get search element from page
    var searchElement = document.getElementById("search-label");
    console.log(searchElement);
    // set search element to the selected text
    searchElement.value = info.selectionText;
    // submit the search
    document.getElementById("glass").click();
    console.log("btn clicked");
});
