chrome.runtime.onInstalled.addListener(function () {
    console.log("on install!");
});

chrome.action.onClicked.addListener((tab) => {
    console.log("click!", tab);
});
