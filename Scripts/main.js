// Start Navigation script
const navLinksEls = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;

navLinksEls.forEach((navLinksEls) => {
  const navLinkPathname = new URL(navLinksEls.href).pathname;
  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    navLinksEls.classList.add("activeNavLinks");
  }
});
// End Navigation script
