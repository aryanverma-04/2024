function getDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month.toString().length == 1) {
            month = '0' + month;
    }
    if (day.toString().length == 1) {
            day = '0' + day;
    }
    var date = year + '/' + month + '/' + day;
    return date;
}
function getTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (hour.toString().length == 1) {
            hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
            minute = '0' + minute;
    }
    if (second.toString().length == 1) {
            second = '0' + second;
    }
    let period = "AM";
    if (hour>12){
        hour-=12;
        period="PM";
    }
    var time = hour + ':' + minute + ':' + second +' '+ period;
    return time;
}

// example usage: realtime clock
setInterval(function() {
    time = getTime();
    date = getDate();
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
},1000);