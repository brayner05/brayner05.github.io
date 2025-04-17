document.addEventListener("scroll", e => {
    const navBar = document.querySelector("nav");
    if (window.scrollY > 20) {
        navBar.classList.remove("hide")
    } else {
        navBar.classList.add("hide");
    }
})