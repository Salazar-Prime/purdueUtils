// Sciprt File for getting selection and looking it up on Google
// add contetx tmenu on click

function setupContextmenus() {
    chrome.contextMenus.create({
        title: 'Selection Lookup',
        contexts: ['selection'],
        onClicked: function (info, tab) {
            chrome.tabs.sendMessage(tab.id, {
                action: 'lookupSelection',
                selection: info.selectionText,
            });
        }
    });
}

// add listener to call setupContextmenus
chrome.action.onClicked.addListener(setupContextmenus);
