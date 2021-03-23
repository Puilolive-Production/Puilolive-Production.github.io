function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "日曜日";
    weekday[1] = "月曜日";
    weekday[2] = "火曜日";
    weekday[3] = "水曜日";
    weekday[4] = "木曜日";
    weekday[5] = "金曜日";
    weekday[6] = "土曜日";
  
    var n = weekday[d.getDay()];
    document.getElementById("weekdays").innerHTML = n;
  }

function myDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = mm+'.'+dd+'.'+yyyy;
    document.getElementById("date").innerHTML = today;
}

function myDrag() { 
    document.getElementById('puipui').draggable = false; 
    document.getElementById('puipui1').draggable = false; 
} 
