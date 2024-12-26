function show_current_time() {
    document.getElementById("current-time").innerHTML = Date();
};
function show_current_festival() {
    var festival;
    let style = "text-align: center; font-weight: bold;";
    getDate();
    if (month == 12 && day == 25) {
        festival = "耶誕節快樂！";
        style += "color: green; font-size: 50px;"
    } else if (month == 12 && day == 31 && hour < 23) {
        festival = "新年倒計時 " + (24 - hour) + "小時" + (60 - minute) + "分鐘" + (60 - second) + "秒" + "！";
        style += "font-size: 20px;";
    } else if (month == 12 && day == 31 && hour == 23 && minute < 59) {
        festival = "新年倒計時 " + (60 - minute) + "分鐘" + (60 - second) + "秒" + "！";
        style += "color: red; font-size: 30px;";
    } else if (month == 12 && day == 31 && hour == 23 && minute == 59 && second < 60) {
        festival = "新年倒計時 " + (60 - second) + "秒" + "！";
        style += "color: gold; font-size: 50px;";
    } else if (month == 1 && day == 1) {
        festival = "新年快樂！";
        style += "color: gold; font-size: 50px;";
    } else {
        festival = "";
    }
    document.getElementById("current-festival").innerHTML = festival;
    document.getElementById("current-festival").style = style;
}

function show_next_OI_Contest() {
    getDate();
}

setInterval("show_current_festival()", 1000);
setInterval("show_current_time()", 1000);