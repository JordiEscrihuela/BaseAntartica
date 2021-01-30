// 5:00 PM en horario España
var end = new Date('Febrary 7, 2021 16:50:00 GMT+01:00');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '¡ÉS HORA!';

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  if (days == 1) {
    document.getElementById('countdown').innerHTML = days + ' dia, ';
  } else {
    document.getElementById('countdown').innerHTML = days + ' dies, ';
  }
  if (hours == 1) {
    document.getElementById('countdown').innerHTML += hours + ' hora, ';
  } else {
    document.getElementById('countdown').innerHTML += hours + ' hores, ';
  }
  if (minutes == 1) {
    document.getElementById('countdown').innerHTML += minutes + ' minut, ';
  } else {
    document.getElementById('countdown').innerHTML += minutes + ' minuts, ';
  }
  if (seconds == 1) {
    document.getElementById('countdown').innerHTML += seconds + ' segon';
  } else {
    document.getElementById('countdown').innerHTML += seconds + ' segons';
  }
}

timer = setInterval(showRemaining, 1000);// JavaScript Document