function translateHeader () {
  const HOME_NAV_BUTTON = document.getElementById("home__nav-button");
  HOME_NAV_BUTTON.textContent = "Home";
  
  const GROUPS_NAV_BUTTON = document.getElementById("groupes__nav-button");
  GROUPS_NAV_BUTTON.textContent = "Groups";
  
  const TEAM_NAV_BUTTON = document.getElementById("team__nav-button");
  TEAM_NAV_BUTTON.textContent = "Team";
  
  const PARENTS_NAV_BUTTON = document.getElementById("parents__nav-button");
  PARENTS_NAV_BUTTON.textContent = "Parents"; 
}

export { translateHeader };