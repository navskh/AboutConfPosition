// puppeteer을 가져온다.
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");
const chromePaths = require("chrome-paths");

async function isComeOut(currUrl) {
  var chrome = chromePaths.chrome;
  // var chromium = chromePaths.chromium;
  // 브라우저를 실행한다.
  // 옵션으로 headless모드를 끌 수 있다.
  const browser = await puppeteer.launch({
    // Browser 띄워서 보여줄지 여부 확인
    // headless: false,
    // 윈도우 크롬 자동 설치시 설치되는 경로
    executablePath: chrome,
    // 윈도우 크롬 사용자 정보를 가지는 경로
    // userDataDir: "C:/Users/navskh/AppData/Local/Google/Chrome/User Data",
  });

  // 새로운 페이지를 연다.
  const page = await browser.newPage();
  // 페이지의 크기를 설정한다.
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  if (currUrl == null){
    await page.goto(
      "http://univexpo.kr/%eb%b0%95%eb%9e%8c%ed%9a%8c%ec%86%8c%ea%b0%9c/%eb%b6%80%ec%8a%a4%eb%b0%b0%ec%b9%98%eb%8f%84/"
    );
  }
  else {
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
