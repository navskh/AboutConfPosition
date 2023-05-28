const { Notification } = require("electron");
const opn = require("opn");

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

module.exports = { showNotification };
