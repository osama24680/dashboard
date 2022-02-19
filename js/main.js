toggle=document.querySelector(".toggle")
bars_icon=document.querySelector(".bars_icon")
navigation=document.querySelector(".navigation")
main=document.querySelector(".main")
function toggleMenu() {
    toggle.classList.toggle("active")
    navigation.classList.toggle("active")
    main.classList.toggle("active")
}
bars_icon.addEventListener("click", toggleMenu)









































