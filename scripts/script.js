/* =========================================
   UNITY SANTANA SUNDAY - PERSONAL WEBSITE
   ========================================= */

// 1. Mobile navigation menu

const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const menuIsOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(menuIsOpen));

        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = menuIsOpen ? "✕" : "☰";
    });

    // Close the mobile menu after a navigation link is selected.
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}

// 2. Display the current year in the footer.

const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 3. Explain the status of course buttons.
// These buttons do NOT take payments.

const courseButtons = document.querySelectorAll(".course-button");

courseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const courseName = button.dataset.course || "This product";

        alert(
            courseName +
            " is not available for purchase yet.\n\n" +
            "No payment has been taken. The secure payment and " +
            "course-delivery system will be added in a later stage."
        );
    });
});
