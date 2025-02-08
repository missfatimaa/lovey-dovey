let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let txt = document.getElementById("txt");
let flag = 0;
window.addEventListener("load", function () {
  txt.innerText = `إِن رُوحِي تُنَاجِيكِ
وَعَيْنِي تَسِيرُ إِثْرَ خُطَاكِ
لَمْ يَشْفِنِي سِوَى أَمَلِي
أَنَّنِي يَوْمًا أَرَاكِ`;
});

txt.addEventListener("click", function () {
  if ((flag == 0)) {
    txt.innerText = `روحم با تو نجوا می‌کند
        و چشمانم به دنبال گام‌هایت روان است
        هیچ چیز جز امیدم مرا آرام نمی‌کند
        که روزی تو را ببینم`;
    flag = 1;
  } else {
    txt.innerText = `إِن رُوحِي تُنَاجِيكِ
        وَعَيْنِي تَسِيرُ إِثْرَ خُطَاكِ
        لَمْ يَشْفِنِي سِوَى أَمَلِي
        أَنَّنِي يَوْمًا أَرَاكِ`;
    flag = 0;
  }
});

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
