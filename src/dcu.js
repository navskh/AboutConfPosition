const credential = require("./key/credentials.json");
const { google } = require("googleapis");
let iconv = require("iconv-lite");

// import { client_email, private_key } from '../key/credentials.json';
// import { google } from 'googleapis';

async function DCUComeOut(currUrl) {
    // json 파일을 가지고 인증 다음과 같이 사용
    // scope : spead sheet 만 줌.
    const client_email = credential.client_email;
    const private_key = credential.private_key;

    const authorize = new google.auth.JWT(client_email, null, private_key, [
        "https://www.googleapis.com/auth/spreadsheets",
    ]);
    // google spread sheet api  가져오기
    const googleSheet = google.sheets({
        version: "v4",
        auth: authorize,
    });

    const context = await googleSheet.spreadsheets.values.get({
        spreadsheetId: "1r9d9IPagwzshcCEVvaGqHV34vOpeXukIwY2f2yw1VgM",
        range: "최종표의 사본!B8:C18",
    });

    return context.data.values;
    // const app = await NestFactory.create(AppModule);
    // await app.listen(3000);
}

exports.DCUComeOut = DCUComeOut;
