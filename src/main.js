import './style.css'
import { products } from "./products.js"

export function search_product() {
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

export function go_to_results() {
    const search_input = document.getElementById("searchbar").value.trim();

    if (search_input === "") {
        return;
    }

    const results = products.filter(product =>
        product.name.toLowerCase().includes(search_input.toLowerCase()) ||
        product.brand.toLowerCase().includes(search_input.toLowerCase())
    );

    if (results.length === 0) {
        document.getElementById("popup-message").textContent =
            `We couldn't find any fragrances matching your search. Try typing a perfume name such as “Dior Sauvage”, then search again.`;

        document.getElementById("no-results-popup").style.display = "flex";
        return;
    }

    window.location.href = `/search-results.html?query=${encodeURIComponent(search_input)}`;
}

//Event Listeners
document.getElementById("search-button").addEventListener("click", go_to_results);
document.getElementById("searchbar").addEventListener("input", search_product);
document.getElementById("searchbar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        go_to_results();
    }
});

document.getElementById("revise-search").addEventListener("click", function() {
    document.getElementById("no-results-popup").style.display = "none";
});