window.onload = function () {
    chrome.storage.sync.get("enabled", function (data) {
        document.getElementById("status").textContent = data.enabled
            ? "Enabled"
            : "Disabled";
    });
};

document.getElementById("toggle").addEventListener("click", function () {
    console.log("Button was clicked!");
    toggleEnable();
});

function toggleEnable() {
    chrome.storage.sync.get("enabled", function (data) {
        var currentStatus = data.enabled;
        chrome.storage.sync.set({ enabled: !currentStatus }, function () {
            console.log(
                "The extension is now " +
                    (!currentStatus ? "enabled" : "disabled")
            );
            document.getElementById("status").textContent = !currentStatus
                ? "Enabled"
                : "Disabled";
        });
    });
}
