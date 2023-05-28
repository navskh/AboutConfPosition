document.getElementById("start").onclick = function () {
    return start();
};
document.getElementById("stop").onclick = function () {
    return stop();
};

document.getElementById("startDCU").onclick = function () {
    return startDCU();
};
document.getElementById("stopDCU").onclick = function () {
    return stopDCU();
};

document.getElementById("crawlSports").onclick = function () {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "visible";

    return crawlSports();
};
document.getElementById("stopCrawl").onclick = function () {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "hidden";

    return stopCrawl();
};
