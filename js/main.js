const homeLink = document.getElementById("home-link")
const aboutLink = document.getElementById("about-link")
const portfolioLink = document.getElementById("portfolio-link")

/**
 * Checks whether or not an HTML element is currently visible
 * @param {HTMLElement} element
 * @returns whether or not element is visible
 */
const isInView = element => {
    const bounding = element.getBoundingClientRect()
    return bounding.top >= 0 && bounding.top <= window.innerHeight
}

/**
 * Fades a element in or out based on where the element is on the screen.
 * @param {HTMLElement} element
 */
const fadeElement = element => {
    if (isInView(element)) {
        element.classList.add("in-view")
    } else {
        element.classList.remove("in-view")
    }
}

/**
 * Handle a scroll event
 * @param {Event} event
 */
const handleScroll = event => {
    for (const section of document.querySelectorAll("section")) {
        fadeElement(section)
    }
}

document.addEventListener("scroll", handleScroll)
