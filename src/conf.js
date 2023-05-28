// puppeteer을 가져온다.
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");
const chromePaths = require("chrome-paths");

async function isComeOut(currUrl) {
    var chrome = chromePaths.chrome;
    const browser = await puppeteer.launch({
        executablePath: chrome,
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();
    // 페이지의 크기를 설정한다.
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    if (currUrl == null) {
        await page.goto(
            "http://univexpo.kr/%eb%b0%95%eb%9e%8c%ed%9a%8c%ec%86%8c%ea%b0%9c/%eb%b6%80%ec%8a%a4%eb%b0%b0%ec%b9%98%eb%8f%84/"
        );
    } else {
        await page.goto(currUrl);
    }

    const content = await page.content();

    const $ = cheerio.load(content);

    const title = $(
        "#post-17 > div > div.wp-block-group.content_wrap > div > p.step_title"
    ).text();

    if (title == "추후 업데이트 예정") {
        console.log("아직이야");
        return "not yet";
    } else {
        console.log("나왔어");
        return "yes";
    }
}

exports.isComeOut = isComeOut;
