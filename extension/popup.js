const broList = [
    "김경환",
    "야마다",
    "심원",
    "이정현",
    "이은상",
    "장준영",
    "강희상",
    "김지용",
    "손승운",
    "박태준",
    "오영탁",
    "이영기",
    "김선욱",
    "김영욱",
    "정재원",
    "이승우",
    "여상구",
    "조일현",
    "손명한",
    "이진호",
    "김회영",
    "최진명",
];

function makeOption(selector) {
    broList.forEach((ele) => {
        $(selector).append(`<option value="${ele}">${ele}</option>`);
    });
}

let isRecent = true;
$("#statusLabel").text("현재 세팅 값 최신상태입니다.").css("color", "blue");
$(document).ready(function () {
    // 여기에 코드를 작성하세요. 이 코드는 페이지가 완전히 로드된 후 실행됩니다.
    makeOption("#bro1");
    makeOption("#bro2");
    makeOption("#bro3");

    initData();

    document.getElementById("save").addEventListener("click", function () {
        saveSetting();
    });
    $("#startTime, #endTime, #bro1, #bro2, #bro3").change(() => {
        isRecent = false;
        $("#statusLabel")
            .text("현재 세팅 값 저장해야합니다.")
            .css("color", "red");
    });
});

function initData() {
    chrome.storage.local.get(["collection"], function (result) {
        const { collection } = result;
        const { startTime, endTime, bro1, bro2, bro3 } = collection;

        $("#startTime").val(startTime);
        $("#endTime").val(endTime);
        $("#bro1").val(bro1);
        $("#bro2").val(bro2);
        $("#bro3").val(bro3);
    });
}

function saveSetting() {
    const startTime = $("#startTime").val();
    const endTime = $("#endTime").val();
    const bro1 = $("#bro1").val();
    const bro2 = $("#bro2").val();
    const bro3 = $("#bro3").val();

    const collection = {
        startTime,
        endTime,
        bro1,
        bro2,
        bro3,
    };

    // 데이터 저장
    chrome.storage.local.set({ collection }, function () {
        console.log("Value is set to " + collection);
    });
    isRecent = true;
    $("#statusLabel").text("현재 세팅 값 최신상태입니다.").css("color", "blue");
}
