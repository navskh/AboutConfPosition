const { app, BrowserWindow } = require("electron");
require("./index");

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });
  // mainWindow.loadURL("http://localhost:5000/");
  // mainWindow.focus();
  mainWindow.loadFile("./client/index.html");

  console.log("ready");
});
