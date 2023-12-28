const navigation = document.querySelector(".navigation")
const menuToggle = document.querySelector(".menuToggle")


menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    navigation.classList.toggle("active")


})