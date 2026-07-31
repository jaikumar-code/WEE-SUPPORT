(function () {
  "use strict";

  var header = document.getElementById("header");
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    var pos = window.scrollY + 120;
    var currentId = "home";

    sections.forEach(function (section) {
      if (section.offsetTop <= pos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  var revealEls = document.querySelectorAll(
    ".feature-card, .service-card, .testimonial-card, .benefit-list li, .mini-card, .about-metrics .metric"
  );

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });

  var newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("newsletterEmail");
    var message = document.createElement("p");
    message.className = "newsletter-ok";
    message.textContent = "Thank you for subscribing! Stay tuned for the latest updates.";

    var existing = newsletterForm.parentElement.querySelector(".newsletter-ok");
    if (existing) {
      existing.remove();
    }

    newsletterForm.parentElement.appendChild(message);
    emailInput.value = "";
  });

  if (window.matchMedia("(pointer: fine)").matches) {
    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;

    document.addEventListener("mousemove", function (event) {
      targetX = event.clientX;
      targetY = event.clientY;
    });

    function animateGlow() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      glow.style.left = currentX + "px";
      glow.style.top = currentY + "px";
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }
})();
