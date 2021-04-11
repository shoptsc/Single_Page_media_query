const burgerMenu = document.getElementById("burger-menu");
const burgerList = document.querySelector(".burger-list");

burgerMenu.addEventListener("click", ()=>{
    burgerList.classList.toggle("burger-list")
})