const publicVapidKey =
  "BHTc8i7mrs0-bcmRoeUwGf1IUs_anj_BmCUfuu5negCGlo4en70vga4XH3KnbPfreFFG9Bzn7_XCtkYCGlRIYVc";

// Check for service worker
var checkFlag = 0;
var myinterval = null;
send();

async function start() {
  var loading = document.getElementById("loading");
  loading.style.display = "block";
  loading.style.visibility = "visible";

  send();
}

// 반복 멈춤
async function stop() {
  var loading = document.getElementById("loading");
  loading.style.display = "block";
  loading.style.visibility = "hidden";
  console.log("stop!");
}

// 서비스워커 등록, 푸쉬 등록, 푸쉬 보내기
function send() {
  const pushsub = {
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey,
  };

  // 푸쉬 보내기
  console.log("푸쉬 보내기");
  fetch("http://localhost:5000/subscribe", {
    method: "POST",
    body: JSON.stringify(pushsub),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
}
