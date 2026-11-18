import './style.css'
import { products } from "./products.js"

function search_product() {
  const search_input = document.getElementById("searchbar").value.trim().toLowerCase();
  const results_container = document.getElementById("results");

  results_container.innerHTML = "";
  const results = products.filter(product =>
      search_input === "" ||
      product.name.toLowerCase().includes(search_input) ||
      product.brand.toLowerCase().includes(search_input)
  ).slice(0, 5);

  results.forEach(product => {
      results_container.innerHTML += `
          <div class="product">
            <a href="/product.html?id=${product.name}">${product.name}</a>
            <p>${product.brand} * ${product.concentration} * ${product.year}</p>
          </div>
      `;
  });
}

document.getElementById("search-button").addEventListener("click", search_product);
document.getElementById("searchbar").addEventListener("input", search_product);
document.getElementById("searchbar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // go to the search results page
    }
});