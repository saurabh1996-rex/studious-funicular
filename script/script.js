const sliderBar = document.querySelector(".slider_bar");
const sliderCircle = document.querySelector(".slider_circle");
const progressBar = document.querySelector(".progress_bar");
const cardTitle = document.querySelector(".card_change");
const Money = document.querySelector(".mon");
sliderBar.oninput = function () {
  sliderCircle.style.left = this.value + "%";
  progressBar.style.width = this.value + "%";
  if (this.value == 0) {
    cardTitle.innerHTML = "10K";
    Money.innerHTML = "$8"

  } else if (this.value == 25) {
    cardTitle.innerHTML = "50K";
    Money.innerHTML = "$12"

  } else if (this.value == 50) {
    cardTitle.innerHTML = "100K";
    Money.innerHTML = "$16"

  } else if (this.value == 75) {
    cardTitle.innerHTML = "500K";
    Money.innerHTML = "$20"

  } else if (this.value == 100) {
    cardTitle.innerHTML = "1M";
    Money.innerHTML = "$24"

  }
};
