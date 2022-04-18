const header = document.querySelector("header");

/*------------------  NavBar --------------------- */

function stickyNavBar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavBar();
window.addEventListener("scroll", stickyNavBar);