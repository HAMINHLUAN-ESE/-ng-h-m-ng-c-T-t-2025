// script.js

const targetDate = new Date('2025-01-29T00:00:00');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const circles = document.querySelectorAll('.circle circle');

const totalDays = Math.floor((targetDate - new Date()) / (1000 * 60 * 60 * 24));

const interval = setInterval(() => {
  const now = new Date();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  updateCircle(circles[0], days, totalDays);
  updateCircle(circles[1], hours, 24);
  updateCircle(circles[2], minutes, 60);
  updateCircle(circles[3], seconds, 60);

  updateElement(daysElement, days);
  updateElement(hoursElement, hours);
  updateElement(minutesElement, minutes);
  updateElement(secondsElement, seconds);

  if (timeRemaining <= 0) {
    clearInterval(interval);
    alert("Chúc mừng năm mới 2025!");
  }
}, 1000);

function updateElement(element, value) {
  element.textContent = String(value).padStart(2, '0');
}

function updateCircle(circle, value, maxValue) {
  const offset = 339.292 * (1 - value / maxValue);
  circle.style.strokeDashoffset = offset;
}
