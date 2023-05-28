// Check for service worker
var checkFlag = 0;
var myinterval = null;
// send("start");

async function startDCU() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "visible";

    waitDCU();
}

const sleep = function (ms) {
    return new Promise((resolve) => (timer = setTimeout(resolve, ms)));
};

let timer;

function waitDCU() {
    console.log("test DCU");
    fetch("http://localhost:5000/testDCU", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result = isThereHim(data);
            if (result == "yes")
                fetch("http://localhost:5000/test", { method: "GET" });
            else {
                timer = setTimeout(() => {
                    waitDCU();
                }, 600000);
            }
        })
        .catch((e) => console.log(e));
}

// 반복 멈춤
async function stopDCU() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "hidden";
    send("stop");
    console.log("stop!");
    clearTimeout(timer);
}

function isThereHim(data) {
    var jsonData = JSON.parse(data.body);
    console.log(jsonData);

    const found = jsonData.find((element) => element[0] == "임세범");
    console.log(found);
    if (found == undefined) {
        return "no";
    } else return "yes";
}
