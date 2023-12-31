import "./normalize.css";
import "./style.css";
import "./images/battleship.png";
import "./images/weatherApp.png";
import "./images/todoList.png";
import "./images/adminDashboard.png";

function changeHeader() {
  if (scrollY)
    header.style.boxShadow =
      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px";
  else header.style.boxShadow = "";

  if (body.className === "dark") {
    if (scrollY) header.style.backgroundColor = "#25282a";
    else header.style.backgroundColor = "";
  } else {
    if (scrollY) header.style.backgroundColor = "#fff";
    else header.style.backgroundColor = "";
  }
}

const colorTheme = document.querySelector(".colorTheme");
const body = document.querySelector("body");
const header = document.querySelector("header");

colorTheme.onclick = () => {
  if (body.className === "dark")
    colorTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="black" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="cursor: pointer; transform: rotate(90deg);"><mask id="circle-mask-1"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle style="cx: 100%; cy: 0%;" r="9" fill="black"></circle></mask><circle cx="12" cy="12" fill="black" style="r: 5px;" mask="url(#circle-mask-1)"></circle><g stroke="currentColor" style="opacity: 1;"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g></svg>`;
  else
    colorTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="white" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="cursor: pointer; transform: rotate(40deg);"><mask id="circle-mask-1"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle style="cx: 50%; cy: 23%;" r="9" fill="black"></circle></mask><circle cx="12" cy="12" fill="white" style="r: 9px;" mask="url(#circle-mask-1)"></circle><g stroke="currentColor" style="opacity: 0;"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g></svg>`;

  body.classList.toggle("dark");
  changeHeader();
};

onscroll = changeHeader;
