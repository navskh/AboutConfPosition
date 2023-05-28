// Check for service worker
var checkFlag = 0;
var myinterval = null;
// send("start");

async function start() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "visible";

    send("start");
}

// 반복 멈춤
async function stop() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
    loading.style.visibility = "hidden";
    send("stop");
    console.log("stop!");
}

// 서비스워커 등록, 푸쉬 등록, 푸쉬 보내기
function send(state) {
    const body = { state: state };

    if (state == "start") {
        // 푸쉬 보내기
        console.log("푸쉬 보내기");
        fetch("http://localhost:5000/subscribe", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    } else {
        console.log("멈춰!");
        fetch("http://localhost:5000/stop", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    }
}
