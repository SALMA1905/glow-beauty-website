document.addEventListener("DOMContentLoaded", () => {
const bookingLinks = document.querySelectorAll(
'.nav-button, .button-primary'
);

bookingLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === "#contact") {
        link.addEventListener("click", () => {
            console.log("The visitor is interested in booking.");
        });
    }
});

console.log("Glow Beauty Studio website is ready!");

});