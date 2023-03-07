// create context menu
browser.menus.create(
    {
        id: "1",
        title: "Lookup Directory for \"%s\"",
        contexts: ["selection"],
    },
    onCreated
);

function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
    console.log(`Error: ${error}`);
}


//listerner for context menu
browser.menus.onClicked.addListener((info, tab) => {
    // URL of the search page
    baseURL = "https://www.purdue.edu/directory/?searchString=";
    searchURL = baseURL + encodeURIComponent(info.selectionText);
    console.log(searchURL);
    // open the search page in a new tab
    browser.tabs.create({ url: searchURL });
    creating.then(onCreated, onError);
});