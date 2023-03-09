let title = $("#singrs h3");
let p = $("#singrs p");

title.click(function (e) {
  $(e.target).next().slideToggle();
});

let countDownDate = new Date("April 9, 2023").getTime();

setInterval(() => {
  var now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s";
}, 1000);

let textArea = document.querySelector("#textArea");
let counter = document.querySelector("#countDown");
console.log(counter);

textArea.addEventListener("input", function () {
  counter.innerHTML = `${100 - textArea.value.length}`;

  if (counter.innerHTML >= 0) {
    counter.innerHTML = `${100 - textArea.value.length}`;
  } else {
    counter.innerHTML = `your available character finished`;
  }
});
