localStorage.getItem("value")
// localStorage.setItem("value", 0);
let val = localStorage.value;
localStorage.setItem("value", val);
const value = document.querySelector(".value-getter");
const percentage = document.querySelector(".percentage");
percentage.innerHTML = (0.67 * val).toFixed(2) + "%";
value.innerHTML = val;
const add = () => {
    // console.log("Hi");
    val++
    value.innerHTML = val;
    localStorage.setItem("value", val);
    percentage.innerHTML = (0.67 * val).toFixed(2) + "%";
}
const remove = () => {
    val--
    value.innerHTML = val;
    localStorage.setItem("value", val);
    percentage.innerHTML = (0.67 * val).toFixed(2) + "%";
}
