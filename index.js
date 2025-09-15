function clock() {

    let hrDots = document.getElementById('hrDots');
    let minDots = document.getElementById('minDots');
    let secDots = document.getElementById('secDots');

    var date = new Date();
    var hours = date.getHours() % 12;
    var amPm = date.getHours() >= 12 ? 'PM' : 'AM';

    hours = hours === 0 ? 12 : hours;

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var secondsDots = '';
    const mx = 60;
    const dg = 360 / mx;
    for (var i = 1; i < (mx + 1); i++) {
        var rotation = i * dg;
        if (i === seconds) {
            secondsDots += '<div class = "dot active" style="transform: rotate(' + rotation + 'deg)"></div>';
        } else {
            secondsDots += '<div class = "dot" style="transform: rotate(' + rotation + 'deg)"></div>';
        }
    }



    var minutesDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6;
        if (i === minutes) {
            minutesDots += '<div class = "dot active" style="transform: rotate(' + rotation + 'deg)"></div>';
        } else {
            minutesDots += '<div class = "dot" style="transform: rotate(' + rotation + 'deg)"></div>';
        }
    }

    secDots.innerHTML = `${secondsDots}<b>${amPm}</b><h2> ${zero(seconds)} <span>Seconds</span></h2>`;
    minDots.innerHTML = `${minutesDots}<h2> ${zero(minutes)} <span>Minutes</span></h2>`;
    hrDots.innerHTML = `<h2> ${zero(hours)} <span>Hours</span></h2>`;


}

function zero(number) {
    return number < 10 ? '0' + number : number;
}
setInterval(clock, 1000)