// puppeteer을 가져온다.
const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const chromePaths = require("chrome-paths");

async function getSports() {
    var chrome = chromePaths.chrome;
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: chrome,
        args: [
            "--window-size=1440,980",
            "--disable-notifications",
            "--disable-features=site-per-process",
            "--disable-web-security",
        ],
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();
    // 페이지의 크기를 설정한다.
    await page.setViewport({
        width: 1440,
        height: 980,
    });

    await page.goto("https://athletics.snu.ac.kr/member/login");

    const config = {
        id: "ljhfree530",
        pw: "snuTJZMFFNA66^^",
    };

    await waitType(page, "#userid", config.id);
    await waitType(page, "#passwd", config.pw);

    const loginBtn = "#memberlogin > form > div.text-center.mt-4 > button";
    await waitClick(page, loginBtn);

    await page.goto("https://athletics.snu.ac.kr/facility/list");

    await page.waitForSelector("div.sl-listbox > a");
    const linkList = await page.$$("div.sl-listbox > a");
    // 0 : 종합운동장
    // 5 : 다목적체육관
    // 9 : 종합체육관
    // 16 : 풋살장

    const linkArr = [];
    linkArr.push({ type: "stadium", node: linkList[0] });
    linkArr.push({ type: "new_gym", node: linkList[5] });
    linkArr.push({ type: "old_gym", node: linkList[9] });
    linkArr.push({ type: "footsal", node: linkList[16] });

    for (link of linkArr) {
        if (link.type == "stadium") {
            await link.node.click();
            const thisDate = '[data-date="2023-06-17"]';
            await page.waitForSelector(thisDate);
            await page.click(thisDate);
        }
    }

    return "message";
}

async function waitClick(page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function waitType(page, selector, input) {
    await page.waitForSelector(selector);
    await page.type(selector, input);
}

module.exports = { getSports };
