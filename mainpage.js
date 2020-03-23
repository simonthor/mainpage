 // When mainpage logo is clicked on, execute code in 'goto_mainpage.js'
 browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript(tab.id, {file:"/goto_mainpage.js"})
});