const hamburgerBtn = document.getElementById("hamburgerBtn")
const nav = document.querySelector("nav")

let menuHidden = true

hamburgerBtn.onclick = () => {
    menuHidden ? nav.style.display = "flex" : nav.style.display = "none";
    menuHidden = !menuHidden
}

