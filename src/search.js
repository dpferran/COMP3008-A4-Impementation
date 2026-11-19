import './style.css';
import { products } from "./products.js";
import { go_to_results, search_product } from "./main.js"

const params = new URLSearchParams(window.location.search);
const search_query = params.get("query") || "";

document.getElementById("results-heading").textContent =
    `Results for "${search_query}"`;


const results = products.filter(product =>
    product.name.toLowerCase().includes(search_query.toLowerCase()) ||
    product.brand.toLowerCase().includes(search_query.toLowerCase())
);

document.getElementById("results-desc").textContent =
    `${results.length} fragrances found. Check the concentration and year to pick the right edition.`;

const top_result = document.getElementById("top-result");
const other_results = document.getElementById("other-results");

if (results.length > 0) {
    display_product(results[0], top_result);

    results.slice(1).forEach(product => {
        display_product(product, other_results);
    });
}
else {
    top_result.textContent = "No matching fragrances found.";
    document.getElementById("other-results").innerHTML = "";
}

function display_product(product, container) {
    const product_element = document.createElement("div");
    product_element.classList.add("product");

    product_element.innerHTML = `
        <a href="/product.html?id=${product.id}">
            <h3>${product.name}</h3>
        </a>
        <p>${product.brand} * ${product.concentration} * ${product.year}</p>
    `;

    container.appendChild(product_element);
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