const mainshow = document.querySelector(".mainshow")
const menu = document.querySelector(".menu");
const cancel= document.querySelector(".cancel");
const menuOpener = document.querySelector(".mainHeader > i");




menuOpener.addEventListener("click", () =>
{
    mainshow.style.display = "none";
    menu.style.display = "block";
})

cancel.addEventListener("click", () =>
{
    menu.style.display = "none";
    mainshow.style.display = "initial";
})