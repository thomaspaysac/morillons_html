// Dropdown
let sidebar_open = false;

const OPEN_NAV_BUTTON = document.getElementById("mobile-nav__open");
const MOBILE_SIDEBAR =  document.getElementsByClassName("mobile-sidebar")[0];
const MOBILE_NAV_ICON = document.getElementById("mobile-nav__icon");

OPEN_NAV_BUTTON.addEventListener("click", () => {
  MOBILE_SIDEBAR.classList.toggle("open-sidebar");
  sidebar_open = !sidebar_open;
  changeSidebarIcon(sidebar_open);
});

function changeSidebarIcon (sidebarStatus) {
  sidebarStatus ? MOBILE_NAV_ICON.src = "./img/icons/close_menu.png" : MOBILE_NAV_ICON.src = "./img/icons/menu.png";
}
