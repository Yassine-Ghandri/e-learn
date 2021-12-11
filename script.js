var visitor = document.getElementById("VisitorNumb");
var graduate = document.getElementById("diplomateNumb");
var course = document.getElementById("courseNumb");
var add = document.getElementsByClassName("add");
var reset = document.getElementById("reset");
console.log(add);
let visitCount = 0;
let gradCount = 0;
let coursCount = 0;
var btns = document.getElementsByClassName("btn-primary");
console.log(btns);
let arr = Array.from(btns);
console.log(arr);

window.addEventListener("load", function () {
  let newcount = localStorage.getItem("visitCount");
  localStorage.setItem("visitCount", parseInt(newcount) + 1);
  visitor.innerText = localStorage.getItem("visitCount");
});

add[0].addEventListener("click", function () {
  let newcount = coursCount;
  localStorage.setItem("coursCount", parseInt(newcount) + 1);
  coursCount++;
  course.innerText = localStorage.getItem("coursCount");
});
reset.onclick = function () {
  localStorage.setItem("visitCount", 0);
  localStorage.setItem("coursCount", 0);
};
