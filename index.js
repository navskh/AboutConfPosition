const express = require("express");
// const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const { Notification } = require("electron");
const opn = require("opn");

const conf = require("./src/conf");

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
      showNotification("나왔어!", "나왔으니 확인!");
      res.json({ data: thisCondtion });
    }

    await sleep(1000);
  }
});

app.get("/test", (req, res) => {
  console.log("test!");
  res.send("Test Start");
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

function showNotification(title, body) {
  const n = new Notification({
    title: title,
    body: body,
  });

  n.on("click", () => {
    opn("http://univexpo.kr/");
  });

  n.show();
}

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
