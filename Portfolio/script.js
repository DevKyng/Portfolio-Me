document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");
  var currentPage = document.body.dataset.page;

  if (currentPage) {
    var currentLink = document.querySelector('.site-nav a[href="' + (currentPage === "home" ? "index.html" : currentPage + ".html") + '"]');
    if (currentLink) {
      currentLink.classList.add("active");
      currentLink.setAttribute("aria-current", "page");
    }
  }

  if (toggle && nav) {
    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close" : "Menu";
      if (isOpen) {
        var firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });
  }
});