function createFooterLinksCTA() {
    var linksFooter = document.createElement("div");
    linksFooter.className = "footer-links";
    linksFooter.innerHTML = "\n    <p>SHARE</p>\n    <div class=\"icons\">\n      <img src=\"images/icon-facebook.svg\" alt=\"Facebook icon\" />\n      <img src=\"images/icon-twitter.svg\" alt=\"Twitter icon\" />\n      <img src=\"images/icon-pinterest.svg\" alt=\"Pinterest icon\" />\n    </div>\n    <img\n      src=\"images/icon-share.svg\"\n      alt=\"Share icon\"\n      class=\"share-icon new-share-icon\"\n    />\n  ";
    return linksFooter;
}
function initializeComponentSwap() {
    var shareIcon = document.querySelector(".share-icon");
    var ctaSection = document.querySelector(".cta-section");
    if (!shareIcon || !ctaSection) {
        console.error("Required elements not found in the DOM.");
        return;
    }
    shareIcon.addEventListener("click", function () {
        var newComponent = createFooterLinksCTA();
        // Replace the CTA section with the new component
        ctaSection.replaceWith(newComponent);
        // Add event listener for the new share icon in the new component
        var newShareIcon = newComponent.querySelector(".new-share-icon");
        newShareIcon === null || newShareIcon === void 0 ? void 0 : newShareIcon.addEventListener("click", function () {
            newComponent.replaceWith(ctaSection); // Restore the original CTA section
        });
    });
}
document.addEventListener("DOMContentLoaded", initializeComponentSwap);
