// nav bar javascrit 
window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
  }
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");
  
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
  
  
//  nav bar js end here 


// api javascript start here 


const searchInput = document.querySelector('#searchInput');
const resultsList = document.querySelector('#results');
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRecipes();
});

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <li class="recipe-item">
            <div class="items">
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" >
                <h4>${recipe.recipe.label}</h4>
            </div>
            <div class="recipe-link">
            <br>
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
                <br>
            </div>
        </li>
        `;
    });
    resultsList.innerHTML = html;
}

// js script end here 