const view = document.querySelector(".page-views");
console.log(view);

const money = document.querySelector(".price");
console.log(money);

const checkBox = document.querySelector("#check");
console.log(checkBox);

const slideAfter = document.querySelector(".slide-after");
console.log(slideAfter);

const slider = document.querySelector(".slider");

function myChange() {
  console.log(checkBox.checked);

  if (slider.value === "1") {
    slideAfter.style.width = "0";
    money.innerHTML = "$8.00";
    view.innerHTML = "10K PAGEWIEVS";
  } else if (slider.value === "2") {
    slideAfter.style.width = "25%";
    money.innerHTML = "$12.00";
    view.innerHTML = "50K PAGEWIEVS";
  } else if (slider.value === "3") {
    slideAfter.style.width = "50%";
    money.innerHTML = "$16.00";
    view.innerHTML = "100K PAGEWIEVS";
  } else if (slider.value === "4") {
    slideAfter.style.width = "75%";
    money.innerHTML = "$24.00";
    view.innerHTML = "500K PAGEWIEVS";
  } else if (slider.value === "5") {
    slideAfter.style.width = "100%";
    money.innerHTML = "$36.00";
    view.innerHTML = "1M PAGEWIEVS";
  } else if (slider.value === "1" && checkBox.checked) {
    slideAfter.style.width = "0";
    money.innerHTML = "$6.00";
    view.innerHTML = "10K PAGEWIEVS";
  } else if (slider.value === "2" && checkBox.checked) {
    slideAfter.style.width = "25%";
    money.innerHTML = "$9.00";
    view.innerHTML = "50K PAGEWIEVS";
  } else if (slider.value === "3" && checkBox.checked) {
    slideAfter.style.width = "50%";
    money.innerHTML = "$12.00";
    view.innerHTML = "100K PAGEWIEVS";
  } else if (slider.value === "4" && checkBox.checked) {
    slideAfter.style.width = "75%";
    money.innerHTML = "$19.00";
    view.innerHTML = "500K PAGEWIEVS";
  } else if (slider.value === "5" && checkBox.checked) {
    slideAfter.style.width = "100%";
    money.innerHTML = "$27.00";
    view.innerHTML = "1M PAGEWIEVS";
  }
}
