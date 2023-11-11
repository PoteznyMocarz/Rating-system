let rates = document.querySelectorAll(".ratings span");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("rateOff");
let startPage = document.querySelector(".rating-start");
let pageEnd = document.querySelector(".rating-end");
let rate;

rates.forEach((rates) => {
  rates.addEventListener("click", (e) =>{
    let clicked = document.querySelector(".clicked");
    if (clicked) {
      clicked.classList.remove("clicked");
    }

    let choice = e.target;
    choice.classList.add("clicked");
    rate = e.target.innerHTML;
  });
});

submitBtn.onclick = function() {
  if (rate) {
  startPage.classList.add("hidden");
  pageEnd.classList.remove("hidden");
  result.innerHTML = rate;
}
}
