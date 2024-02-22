const navBar = document.querySelector("nav")

const navLinks = [
    {
        id: "home-link",
        element: document.getElementById("home-link"),
        target: document.querySelector("header"),
    },
    {
        id: "about-link",
        element: document.getElementById("about-link"),
        target: document.getElementById("about-section"),
    },
    {
        id: "portfolio-link",
        element: document.getElementById("portfolio-link"),
        target: document.getElementById("portfolio-section"),
    },
]

for (const link of navLinks) {
    link.element.addEventListener("click", () => {
        const bounds = link.target.getBoundingClientRect()
        window.scrollTo(0, bounds.top)
    })
}

/**
 * Checks whether or not an HTML element is currently visible
 * @param {HTMLElement} element
 * @returns whether or not element is visible
 */
const isInView = element => {
    const bounds = element.getBoundingClientRect()
    return bounds.top >= 0 && bounds.top <= window.innerHeight
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
