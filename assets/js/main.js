/* main.js - site-wide JS */

(() => {
  const ready = (callback) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  };

  ready(() => {
    const mobileToggle = document.querySelector(".js-mobile-menu-toggle");
    const mobileMenu = document.querySelector(".dp-mobile-menu");
    const mobileOpenIcon = document.querySelector(".js-mobile-menu-icon-open");
    const mobileCloseIcon = document.querySelector(".js-mobile-menu-icon-close");
    const viewAllToggle = document.querySelector(".js-view-all-toggle");
    const viewAllMenu = document.querySelector("#dp-view-all-menu");
    const viewAllClose = document.querySelector(".js-view-all-close");
    const servicesOpen = document.querySelector(".js-mobile-services-open");
    const servicesClose = document.querySelector(".js-mobile-services-close");
    const servicesOverlay = document.querySelector(".dp-services-overlay");

    const setMobileMenu = (isOpen) => {
      if (!mobileToggle || !mobileMenu || !mobileOpenIcon || !mobileCloseIcon) return;

      mobileMenu.classList.toggle("is-open", isOpen);
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      mobileToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      mobileOpenIcon.style.display = isOpen ? "none" : "block";
      mobileCloseIcon.style.display = isOpen ? "block" : "none";
    };

    const setViewAllMenu = (isOpen) => {
      if (!viewAllToggle || !viewAllMenu) return;

      viewAllMenu.classList.toggle("is-open", isOpen);
      viewAllToggle.setAttribute("aria-expanded", String(isOpen));
    };

    const setServicesPanel = (isOpen) => {
      if (!servicesOverlay) return;

      servicesOverlay.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("overflow-hidden", isOpen);
    };

    // Navbar interactions: mobile menu, desktop View All dropdown, and mobile services sheet.
    mobileToggle?.addEventListener("click", () => {
      const nextState = !mobileMenu?.classList.contains("is-open");
      setMobileMenu(nextState);
      if (nextState) setViewAllMenu(false);
    });

    viewAllToggle?.addEventListener("click", (event) => {
      event.stopPropagation();
      const nextState = !viewAllMenu?.classList.contains("is-open");
      setViewAllMenu(nextState);
      if (nextState) setMobileMenu(false);
    });

    viewAllClose?.addEventListener("click", () => {
      setViewAllMenu(false);
    });

    servicesOpen?.addEventListener("click", () => {
      setServicesPanel(true);
      setMobileMenu(false);
    });

    servicesClose?.addEventListener("click", () => {
      setServicesPanel(false);
    });

    servicesOverlay?.addEventListener("click", (event) => {
      if (event.target === servicesOverlay) setServicesPanel(false);
    });

    viewAllMenu?.addEventListener("click", (event) => {
      if (event.target === viewAllMenu) setViewAllMenu(false);
    });

    document.addEventListener("click", (event) => {
      if (!viewAllMenu?.classList.contains("is-open")) return;
      if (viewAllMenu.contains(event.target) || viewAllToggle?.contains(event.target)) return;
      setViewAllMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      setMobileMenu(false);
      setViewAllMenu(false);
      setServicesPanel(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
        setServicesPanel(false);
        return;
      }

      setViewAllMenu(false);
    });
  });
})();
