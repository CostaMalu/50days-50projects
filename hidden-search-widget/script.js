let button = document.querySelector(".btn"); 
let searchBar = document.querySelector(".search"); 
let input = document.querySelector(".input"); 

button.addEventListener("click", () => {

    searchBar.classList.toggle("active"); 
    input.focus(); 
 
})