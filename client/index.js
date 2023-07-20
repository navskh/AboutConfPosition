// document.getElementById("start").onclick = function () {
//     return start();
// };
// document.getElementById("stop").onclick = function () {
//     return stop();
// };

// document.getElementById("startDCU").onclick = function () {
//     return startDCU();
// };
// document.getElementById("stopDCU").onclick = function () {
//     return stopDCU();
// };

document.getElementById("crawlSports").onclick = function () {
    showLoading();
    return crawlSports();
};
document.getElementById("stopCrawl").onclick = function () {
    hideLoading();
    return stopCrawl();
};

document.getElementById("bookStart").onclick = function () {
    showLoading();
    return crawlSports();
};
document.getElementById("bookStop").onclick = function () {
    hideLoading();
    return stopCrawl();
};

function showLoading() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "visible";
}

function hideLoading() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "hidden";
}
