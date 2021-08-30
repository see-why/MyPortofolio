const listItem = document.getElementById("Hamburger");

function clickHamburger() { 
  let menu = document.getElementById("mobile-nav");
  if(menu.style.display === "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }  
}

listItem.addEventListener("click", clickHamburger);

const cancelImage = document.getElementById("cancel-img");

function clickCancel() {
  let menu = document.getElementById("mobile-nav");
  menu.style.display = "none";
}

cancelImage.addEventListener("click", clickCancel);

const listItems = document.querySelectorAll("ul.mobile-nav-menu-list > li");

listItems.forEach(x => x.addEventListener("click",clickCancel));
