let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let txt = document.getElementById("txt");
setInterval(txtFunc, 800);
function txtFunc() {
  txt.addEventListener("mouseover", function () {
    txt.innerText = `روحم با تو نجوا می‌کند
    و چشمانم به دنبال گام‌هایت روان است
    هیچ چیز جز امیدم مرا آرام نمی‌کند
    که روزی تو را ببینم`;
  });
}

// scrollContainer.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   scrollContainer.scrollLeft += event.deltaY;
//   scrollContainer.computedStyleMap.scrollBehavior = "auto";
// });

// // nextBtn.addEventListener("click", () => {
// //   scrollContainer.style.scrollBehavior = "smooth";
// //   scrollContainer.scrollLeft += 900;
// // });

// // backBtn.addEventListener("click", () => {
// //   scrollContainer.style.scrollBehavior = "smooth";
// //   scrollContainer.scrollLeft -= 900;
// // });
