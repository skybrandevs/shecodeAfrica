const mainshow = document.querySelector(".mainshow")
const menu = document.querySelector(".menucontainer");
const cancel= document.querySelector(".menuout");

const menuOpener = document.querySelector(".mainHeader > i");

menuOpener.addEventListener("click", () =>
{
    menu.style.display = "block";
    menu.style.animation = "sliderightmenu 1.3s"
})


cancel.addEventListener("click", () =>
{
   
    menu.style.animation = "sliderightmenu 1.3s";
    menu.style.display = "none";

})
