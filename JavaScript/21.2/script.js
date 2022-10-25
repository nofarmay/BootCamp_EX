const textBigger = document.querySelector(".btn-plus");
const textSmaller = document.querySelector(".btn-minus");
const text = document.querySelector(".text");

textBigger.addEventListener("click", function () {
  let style = getComputedStyle(text, null).getPropertyValue("font-size");
  let fontSize = parseFloat(style) + 1;
  //   console.log(fontSize);
  if (fontSize > 100) {
    return;
  }
  text.style.fontSize = fontSize + "px";
});

textSmaller.addEventListener("click", function () {
  let style = getComputedStyle(text, null).getPropertyValue("font-size");
  let fontSize = parseFloat(style) - 1;
  //   console.log(fontSize);
  text.style.fontSize = fontSize + "px";
});
