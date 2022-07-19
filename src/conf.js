// puppeteer을 가져온다.
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");

async function isComeOut() {
  // 브라우저를 실행한다.
  // 옵션으로 headless모드를 끌 수 있다.
  const browser = await puppeteer.launch({
    // headless: false,
  });

  // 새로운 페이지를 연다.
  const page = await browser.newPage();
  // 페이지의 크기를 설정한다.
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto(
    "http://univexpo.kr/%eb%b0%95%eb%9e%8c%ed%9a%8c%ec%86%8c%ea%b0%9c/%eb%b6%80%ec%8a%a4%eb%b0%b0%ec%b9%98%eb%8f%84/"
  );

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

  // var senderSmtp = "smtp-mail.outlook.com";
  // var senderPort = "587";
  // var senderEmail = "navskh@jinhakapply.com";
  // var senderPass = "gen281315@";
  // var senderName = "Young";
  // var receivers = "navskh@gmail.com";
  // var emailSubject = "입시박람회 정보";
  // var emailHtml = "<p>아직이야</p>";
  // let transporter = nodemailer.createTransport({
  //   // 사용하고자 하는 서비스
  //   // service: 'gmail',
  //   host: senderSmtp, // 'smtp.gmail.com'
  //   port: senderPort, // 587
  //   secure: false,
  //   requireTLS: true,
  //   auth: {
  //     user: senderEmail, // 'myemail@gmail.com'
  //     pass: senderPass, // 'password486!'
  //   },
  // });

  // const mailOptions = {
  //   from: senderEmail,
  //   to: receivers,
  //   subject: emailSubject,
  //   html: emailHtml,
  //   text: "인증메일입니다.",
  // };
  // await transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) console.log(error);
  // });
}

exports.isComeOut = isComeOut;
