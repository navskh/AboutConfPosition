const { app, BrowserWindow } = require("electron");
require("./index");

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 840,
        autoHideMenuBar: true,
        useContentSize: true,
        resizable: false,
    });
    mainWindow.loadFile("./client/index.html");

    console.log("ready");
});
