/**
 * README
 * 여기를 읽어보시면 사용법을 알 수 있습니다.
 *
 * 아래 절차대로 사용하세요
 * 1. 그냥 크롬창 띄웁니다.
 * 2. 평소처럼 https://athletics.snu.ac.kr/facility/list 에 접속합니다.
 * 3. 예약 원하는 시설을 클릭하여 대기하면서 F12 버튼을 눌러서 개발자 도구를 띄워둡니다.
 * 4. 개발자 도구가 뜨면 그 중에 'Console' 탭을 클릭합니다.
 * 5. 아래 코드를 복붙합니다.
 *
 * 위 절차대로 하되, 자신이 신청하고자하는 정보를 입력해야할 것입니다.
 * 아래 코드 분석은 하실 필요 없습니다. 중요한 것은 맨 아래에 'initAuto' 함수입니다.
 * initAuto 함수의 경우 사용법 예시는 아래와 같습니다.
 * initAuto('예약 시작 시간', '예약 종료 시간', 추가 등록자1, 추가 등록자2, 추가 등록자3);
 * 예를들면
 * initAuto('14', '16', 이은상, 이정현, 심원);
 * 위와 같이 입력하면 됩니다.
 *
 * 여기서 함수 parameter에 대한 설명을 하겠습니다.
 * 함수 첫번째 두번째 인자는 꼭 홑따옴표(') 나 쌍따옴표(") 로 감싸주셔야 합니다.
 * 시간을 단위로 입력하면 됩니다. (14 => 14시, 16 => 16시) 입니다.
 * 만약 '14시 00분' 이렇게 입력하셨다면 상관 없습니다. 다 잘라버리고 앞 두자리만 가지고 동작합니다.
 *
 * 세번째에서 다섯번째 인자의 경우는
 * 홑따옴표, 쌍따옴표를 쓰시면 안됩니다. 그냥 문자자체로 입력하세요.
 * 또한 저희 형제들 이름으로 넣어주어야 합니다. 아래의 이름 가운데서만 입력 가능합니다.
 * [김경환,야마다,심원,이정현,이은상,장준영,강희상,김지용,손승운,박태준,오영탁,이영기,김선욱,김영욱,정재원,이승우,여상구,조일현,손명한]
 *
 * 자신의 이름은 제외한 다른 형제의 이름을 입력하면 됩니다. (자신의 이름은 자동으로 입력이 되어있기 때문입니다.)
 *
 * 위 함수는 동적으로 동작하기 때문에 만약 한명만 더 필요한 경우 아래와 같이 한명만 입력하면 됩니다.
 * initAuto('14', '16', 이은상)
 *
 * 만약 두명이 더 필요할 경우에는
 * initAuto('14', '16', 이은상, 이정현)
 * 위와 같이 입력하면 되겠죠
 *
 * 이상입니다.
 * 이를 통해 원할하게 체육시설을 예약하여 교제하는데에 도움이 되기를 기도하는 마음으로 글을 마칩니다.
 */

class Student {
    constructor(name, stuId, telNo, major) {
        this.name = name;
        this.stuId = stuId;
        this.telNo = telNo;
        this.major = major;
    }
}
const 김경환 = new Student(
    "김경환",
    "D041089",
    "010-3421-6022",
    "기초과학연구원"
);
const 야마다 = new Student(
    "야마다 아키히코",
    "D043441",
    "010-2228-1634",
    "혁신융합대학총괄사업단"
);
const 심원 = new Student("심원", "Z032325", "010-4449-1995", "치의과학과");
const 이정현 = new Student(
    "이정현",
    "Z032324",
    "010-3587-1233",
    "공과대학 전기정보공학부"
);
const 이은상 = new Student(
    "이은상",
    "D038733",
    "010-4478-3209",
    "정보기술 미래인재 교육연구단"
);
const 장준영 = new Student(
    "장준영",
    "D043704",
    "010-9340-4906",
    "유전공학연구소"
);
const 강희상 = new Student(
    "강희상",
    "2021-19049",
    "010-2660-5028",
    "산림과학부"
);
const 김지용 = new Student(
    "김지용",
    "2021-36699",
    "010-3538-1712",
    "기술경영경제정책"
);
const 손승운 = new Student(
    "손승운",
    "2020-30494",
    "010-2991-5210",
    "환경보건학과"
);
const 박태준 = new Student(
    "박태준",
    "2021-24123",
    "010-2528-0567",
    "사범대학 과학교육과"
);
const 오영탁 = new Student(
    "오영탁",
    "2022-39508",
    "010-3952-9306",
    "공과대학 전기정보공학부"
);
const 이영기 = new Student(
    "이영기",
    "2022-29247",
    "010-3572-7351",
    "AI융합교육학과"
);
const 김선욱 = new Student(
    "김선욱",
    "2018-14882",
    "010-7900-6195",
    "공과대학 전기정보공학부"
);
const 김영욱 = new Student(
    "김영욱",
    "2018-24315",
    "010-3917-2518",
    "공과대학 전기정보공학부"
);
const 정재원 = new Student("정재원", "2019-19942", "010-2339-9318", "건축학과");
const 이승우 = new Student(
    "이승우",
    "2023-23985",
    "010-7231-7757",
    "기계항공공학부"
);
const 여상구 = new Student(
    "여상구",
    "2017-20673",
    "010-7373-7143",
    "사회교육과"
);
const 조일현 = new Student(
    "조일현",
    "2011-30733",
    "010-2040-4906",
    "환경대학원 환경계획학과"
);
const 손명한 = new Student("손명한", "2021-12061", "010-4255-0307", "조경학과");
const 이진호 = new Student(
    "이진호",
    "2023-28154",
    "010-4031-5810",
    "사범대학 과학교육과"
);

const 김회영 = new Student(
    "김회영",
    "2023-24822",
    "010-8624-4749",
    "자연과학대학 협동과정 생물정보학전공"
);
const 최진명 = new Student(
    "최진명",
    "2023-24746",
    "010-5871-1248",
    "전기정보공학부"
);

stuList = {
    김경환,
    야마다,
    심원,
    이정현,
    이은상,
    장준영,
    강희상,
    김지용,
    손승운,
    박태준,
    오영탁,
    이영기,
    김선욱,
    김영욱,
    정재원,
    이승우,
    여상구,
    조일현,
    손명한,
    이진호,
    김회영,
    최진명,
};
/**
 *
 * @param {string} startTime
 * @param {string} endTime
 * @param {Student} user1
 * @param {Student} user2
 * @param {Student} user3
 */
function initAuto(startTime, endTime, user1, user2, user3) {
    const trimedStime = startTime.slice(0, 2);
    const trimedEtime = endTime.slice(0, 2);
    thisTimeSelect("#sTime", trimedStime);
    thisTimeSelect("#eTime", trimedEtime);
    $("#member_check_result1 > button:eq(0)").trigger("click");
    $("#member_name2").val(user1.name);
    $("#member_userno2").val(user1.stuId);
    $("#member_mobile2").val(user1.telNo);
    $("#member_department2").val(user1.major);
    $("#member_check_result2 > button:eq(0)").trigger("click");
    if (user2) {
        $("#member_name3").val(user2.name);
        $("#member_userno3").val(user2.stuId);
        $("#member_mobile3").val(user2.telNo);
        $("#member_department3").val(user2.major);
        $("#member_check_result3 > button:eq(0)").trigger("click");
    }
    if (user3) {
        $("#member_name4").val(user3.name);
        $("#member_userno4").val(user3.stuId);
        $("#member_mobile4").val(user3.telNo);
        $("#member_department4").val(user3.major);
        $("#member_check_result4 > button:eq(0)").trigger("click");
    }
    $("#oath").trigger("click");
    $("#privacy").trigger("click");
    var offset = $("#memberCaptcha").offset();
    window.scrollTo({
        top: offset.top,
        behavior: "smooth",
    });
    $("#memberCaptcha").before(
        "<div style='font-weight: 700; font-size: 20px; color: red'> ↙↙여기를 클릭하세요!! </div>"
    );
    $("#memberCaptcha").css("border", "3px solid red");
}
function thisTimeSelect(selector, thisTime) {
    $(`${selector} > option`).each((idx, ele) => {
        if ($(ele).text() == `${thisTime}시 00분`) {
            const thisValue = $(ele).val();
            $(selector).val(thisValue);
        }
    });
}

// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "SELECT_VALUE") {
        console.log("Received value from popup:", message.value);

        // 웹 페이지 내의 JavaScript로 전달하거나 필요한 작업을 여기서 수행합니다.
    }
});

//여기아래 입력하면 됨======================================
let thisExcuted = 0;
let startTime, endTime, bro1, bro2, bro3;
$(document).ready(function () {
    // 데이터를 가져올 때는 다음과 같이 할 수 있습니다.
    chrome.storage.local.get(["collection"], function (result) {
        const { collection } = result;

        startTime = collection.startTime;
        endTime = collection.endTime;
        bro1 = collection.bro1;
        bro2 = collection.bro2;
        bro3 = collection.bro3;
    });
});

window.addEventListener("keypress", function (event) {
    // console.log(startTime, endTime, bro1, bro2, bro3);

    if (thisExcuted > 0) return;
    // console.log(event.shiftKey, event.key);
    if (
        event.shiftKey &&
        (event.key == "i" || event.key == "I" || event.key == "ㅑ")
    ) {
        initAuto(
            startTime,
            endTime,
            stuList[bro1],
            stuList[bro2],
            stuList[bro3]
        );
        thisExcuted = 1;
    }
});

//여기위 입력하면 됨======================================
