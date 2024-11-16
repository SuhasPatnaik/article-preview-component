function createFooterLinksCTA(): HTMLElement {
  const linksFooter = document.createElement("div");
  linksFooter.className = "footer-links";

  linksFooter.innerHTML = `
    <p>SHARE</p>
    <div class="icons">
      <img src="images/icon-facebook.svg" alt="Facebook icon" />
      <img src="images/icon-twitter.svg" alt="Twitter icon" />
      <img src="images/icon-pinterest.svg" alt="Pinterest icon" />
    </div>
    <img
      src="images/icon-share.svg"
      alt="Share icon"
      class="share-icon new-share-icon"
    />
  `;

  return linksFooter;
}

function initializeComponentSwap() {
  const shareIconButton =
    document.querySelector<HTMLImageElement>(".share-icon-btn");
  const ctaSection = document.querySelector<HTMLElement>(".cta-section");

  if (!shareIconButton || !ctaSection) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  shareIconButton.addEventListener("click", () => {
    const newComponent = createFooterLinksCTA();

    // Replace the CTA section with the new component
    ctaSection.replaceWith(newComponent);

    // Add event listener for the new share icon in the new component
    const newShareIcon =
      newComponent.querySelector<HTMLImageElement>(".new-share-icon");
    newShareIcon?.addEventListener("click", () => {
      newComponent.replaceWith(ctaSection); // Restore the original CTA section
    });
  });
}

document.addEventListener("DOMContentLoaded", initializeComponentSwap);
