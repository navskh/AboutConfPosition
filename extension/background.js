chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ enabled: true }, function () {
        console.log("The extension is enabled");
    });
});

chrome.action.onClicked.addListener((tab) => {
    // chrome.storage.sync.get("enabled", function (data) {
    //     var currentStatus = data.enabled;
    //     chrome.storage.sync.set({ enabled: !currentStatus }, function () {
    //         console.log(
    //             "The extension is now " +
    //                 (!currentStatus ? "enabled" : "disabled")
    //         );
    //         if (!currentStatus) {
    //             chrome.scripting.executeScript({
    //                 target: { tabId: tab.id },
    //                 files: ["content.js"],
    //             });
    //         }
    //     });
    // });
});
