import { translateHeader } from "./traduction/header";

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
  }
})()