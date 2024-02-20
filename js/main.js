/**
 * Checks whether or not an HTML element is currently visible
 * @param {HTMLElement} element
 * @returns whether or not element is visible
 */
const isInView = element => {
    const bounding = element.getBoundingClientRect();
    return bounding.top >= 0 && bounding.top <= window.innerHeight;
};

/**
 * Fades a section in or out based on where the section is on the screen.
 * @param {HTMLElement} section
 */
const fadeSection = section => {
    if (isInView(section)) {
        section.classList.add("in-view");
    } else {
        section.classList.remove("in-view");
    }
};

/**
 * Handle a scroll event
 * @param {Event} event
 */
const handleScroll = event => {
    for (const section of document.querySelectorAll("section")) {
        fadeSection(section);
    }
};

document.addEventListener("scroll", handleScroll);