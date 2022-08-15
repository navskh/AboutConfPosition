const express = require("express");
// const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const { Notification } = require("electron");
const opn = require("opn");

const conf = require("./src/conf");
const dcu = require("./src/dcu");

const app = express();

app.use(bodyParser.json());

// Subscribe Route
app.post("/subscribe", async (req, res) => {
  var thisCondtion = "";
  var i = 0;
  while (thisCondtion != "yes") {
    thisCondtion = await conf.isComeOut();
    if (thisCondtion == "yes") {
      console.log("clear!");
      showNotification("나왔어!", "나왔으니 확인!", "http://univexpo.kr/");
      res.json({ data: thisCondtion });
    }

    await sleep(1000);
  }
});

app.get("/test", (req, res) => {
  console.log("test!");
  showNotification("DCU!", "카톡보내자!", "https://docs.google.com/spreadsheets/d/1r9d9IPagwzshcCEVvaGqHV34vOpeXukIwY2f2yw1VgM/edit#gid=1607103647");
});


app.get("/testDCU", async (req, res) => {
  var thisCondtion = {};
  var i = 0;
  thisCondtion = await dcu.DCUComeOut();
  console.log(JSON.stringify(thisCondtion));
  res.json({ body: JSON.stringify(thisCondtion) });
  // await sleep(1000);
});


let timer;
// 팀장님이 만드신 함수 가져다 썼음.  
const sleep = function (ms) {
  return new Promise((resolve) => (timer = setTimeout(resolve, ms)));
};

app.post("/stop", async (req, res) => {
  console.log(req.body.state);
  clearTimeout(timer);
});


function showNotification(title, body, url) {
  const n = new Notification({
    title: title,
    body: body,
  });

  n.on("click", () => {
    opn(url);
  });

  n.show();
}

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
