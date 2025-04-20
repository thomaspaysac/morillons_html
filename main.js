// Get current language from session storage, set to FR if null
(function setDefaultLang () {
  if (!sessionStorage.getItem("lang")) {
    sessionStorage.setItem("lang", "fr");
  } else {
    return;
  }
})();

// Activate language change buttons in header, reload page when changing language
const FR_BUTTON = document.getElementById("change_lang__fr");
FR_BUTTON.addEventListener("click", () => {
  if (sessionStorage.getItem("lang") !== "fr") {
    sessionStorage.setItem("lang", "fr");
    location.reload();
  }
});

const EN_BUTTON = document.getElementById("change_lang__en");
EN_BUTTON.addEventListener("click", () => {
  if (sessionStorage.getItem("lang") !== "en") {
  sessionStorage.setItem("lang", "en");
  location.reload();
  }
});


// If language is set to french, display HTML. Else, translate DOM
(function translateDOM () {
  if (sessionStorage.getItem("lang") !== "fr") {
    translateHeader();
    translateHomepage();
  }
})()







// TRANSLATION FUNCTIONS
function translateHeader () {
  const HOME_NAV_BUTTON = document.getElementById("home__nav-button");
  HOME_NAV_BUTTON.textContent = "Home";
  
  const GROUPS_NAV_BUTTON = document.getElementById("groups__nav-button");
  GROUPS_NAV_BUTTON.textContent = "Groups";
  
  const TEAM_NAV_BUTTON = document.getElementById("team__nav-button");
  TEAM_NAV_BUTTON.textContent = "Team";
  
  const PARENTS_NAV_BUTTON = document.getElementById("parents__nav-button");
  PARENTS_NAV_BUTTON.textContent = "Parents"; 
}

function translateHomepage () {
  const HOME_WELCOME = document.getElementById("home_welcome");
  HOME_WELCOME.innerHTML = "Welcome to <br/>Crèche des Morillons";

  const HOME_HEADER_2 = document.getElementById("home_header2");
  HOME_HEADER_2.innerHTML = "An institution subsidized by <br/>the City of Geneva";

  const HOME_MESSAGE = document.getElementById("home_parents-message");
  HOME_MESSAGE.innerHTML = "To register your child, please contact the <a href='https://www.geneve.ch/demarches/demande-place-creche'>Early Childhood Information Office (BIPE) of the City of Geneva</a>";

  const CONTACTS = document.getElementById("contacts");
  CONTACTS.textContent = "Contacts";
}