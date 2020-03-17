
browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript(tab.id, {file:"/goto_mainpage.js"})
});