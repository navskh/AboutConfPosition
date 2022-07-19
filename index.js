const express = require("express");
// const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const { Notification } = require("electron");

const conf = require("./src/conf");

const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

// Subscribe Route
app.post("/subscribe", async (req, res) => {
  const subscription = req.body;

  var thisCondtion = "";
  while (thisCondtion != "yes") {
    thisCondtion = await conf.isComeOut();
    console.log(thisCondtion);
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

// 팀장님이 만드신 함수 가져다 썼음.
const sleep = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function showNotification(title, body) {
  new Notification({
    title: title,
    body: body,
  }).show();
}

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
