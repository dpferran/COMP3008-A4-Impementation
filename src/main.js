import './style.css'

const products = [
    {
        name: "Sauvage",
        brand: "Dior",
        concentration: "Eau de Toilette",
        year: 2015
    },
    {
        name: "Bleu de Chanel",
        brand: "Chanel",
        concentration: "Eau de Parfum",
        year: 2014
    },
    {
        name: "Acqua di Gio",
        brand: "Giorgio Armani",
        concentration: "Eau de Toilette",
        year: 1996
    },
    {
        name: "Y",
        brand: "Yves Saint Laurent",
        concentration: "Eau de Parfum",
        year: 2018
    },
    {
        name: "Invictus",
        brand: "Paco Rabanne",
        concentration: "Eau de Toilette",
        year: 2013
    }
];

function search_product() {
  const search_input = document.getElementById("searchbar").value.trim().toLowerCase();
  const results_container = document.getElementById("results");

  results_container.innerHTML = "";
  if (search_input === "") {
      console.log("Please enter a fragrance name.");
      return;
  }

  const results = products.filter(product =>
      product.name.toLowerCase().includes(search_input) ||
      product.brand.toLowerCase().includes(search_input)
  );

  results.forEach(product => {
      results_container.innerHTML += `
          <div class="product">
            <h3>${product.name}</h3>
            <p>${product.brand} * ${product.concentration} * ${product.year}</p>
          </div>
      `;
  });
}

document.getElementById("search-button").addEventListener("click", search_product);
document.getElementById("searchbar").addEventListener("keydown", function(event) {
    search_product();
});