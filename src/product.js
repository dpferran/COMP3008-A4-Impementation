import './style.css';
import { products } from "./products.js";
import "./main.js";

const params = new URLSearchParams(window.location.search);
const product_id = params.get("id") || "";
const from_page = params.get("from") || "";

const accord_colors = {
    "fresh spicy": "rgb(127, 209, 166)",
    "amber": "rgb(232, 160, 72)",
    "citrus": "rgb(241, 208, 72)",
    "aromatic": "rgb(127, 184, 200)",
    "herbal": "rgb(170, 196, 106)",
    "woody": "rgb(184, 136, 92)",
    "warm spicy": "rgb(229, 115, 92)",
    "lavender": "rgb(180, 150, 210)",
    "vanilla": "rgb(236, 214, 170)",
    "aquatic": "rgb(96, 170, 210)",
    "marine": "rgb(110, 160, 200)",
    "fresh": "rgb(140, 215, 200)",
    "fruity": "rgb(230, 120, 140)",
    "metallic": "rgb(170, 175, 185)",
    "sweet": "rgb(235, 150, 180)",
    "earthy": "rgb(150, 120, 90)"
};

let current_product = products.find(product => product.id === product_id);

if (from_page === "similar") {
    document.getElementById("back-link").textContent = "← Back";
}

if (current_product) {
    display_product(current_product);
}
else {
    display_not_found();
}

function display_product(product) {
    document.title = `${product.full_name} - Fragrantica`;

    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-name").textContent = product.full_name;
    document.getElementById("product-concentration").textContent = product.concentration;
    document.getElementById("product-year").textContent = product.year;
    document.getElementById("product-gender").textContent = product.gender;
    document.getElementById("product-description").textContent = product.description;

    display_editions(product);
    display_accords(product);
    display_notes(product);
    display_similar(product);
}

function display_editions(product) {
    const edition_row = document.getElementById("edition-row");
    edition_row.innerHTML = "";

    const editions = products
        .filter(edition => edition.line === product.line)
        .sort((a, b) => a.year - b.year);

    editions.forEach(edition => {
        if (edition.id === product.id) {
            edition_row.innerHTML += `
                <button class="edition-chip selected" data-id="${edition.id}" aria-pressed="true">✓ ${edition.edition} · ${edition.year}</button>
            `;
        }
        else {
            edition_row.innerHTML += `
                <button class="edition-chip" data-id="${edition.id}" aria-pressed="false">${edition.edition} · ${edition.year}</button>
            `;
        }
    });
}

function display_accords(product) {
    const accords_container = document.getElementById("accords");
    accords_container.innerHTML = "";

    product.accords.forEach((accord, index) => {
        let color = "rgb(214, 232, 232)";

        if (index < 3) {
            color = accord_colors[accord.name] || "rgb(2, 139, 155)";
        }

        accords_container.innerHTML += `
            <div class="accord-row">
                <div class="accord-bar">
                    <div class="accord-fill" style="width: ${accord.strength}%; background-color: ${color};"></div>
                    <span class="accord-name">${accord.name}</span>
                </div>
                <span class="accord-percent">${accord.strength}%</span>
            </div>
        `;
    });
}

function display_notes(product) {
    display_note_row("top-notes", product.notes.top);
    display_note_row("middle-notes", product.notes.middle);
    display_note_row("base-notes", product.notes.base);
}

function display_note_row(container_id, notes) {
    const note_container = document.getElementById(container_id);
    note_container.innerHTML = "";

    notes.forEach(note => {
        note_container.innerHTML += `<span class="chip">${note}</span>`;
    });
}

function display_similar(product) {
    const similar_row = document.getElementById("similar-row");
    similar_row.innerHTML = "";

    document.getElementById("similar-desc").textContent =
        `Each card shows what it has in common with ${product.name} ${product.edition}.`;

    product.similar.forEach(similar => {
        const similar_product = products.find(item => item.id === similar.id);

        if (!similar_product) {
            return;
        }

        similar_row.innerHTML += `
            <a class="similar-card" href="/product.html?id=${similar_product.id}&from=similar">
                <div class="similar-image"></div>
                <h3>${similar_product.name}</h3>
                <p>${similar_product.brand} · ${similar_product.edition} · ${similar_product.year}</p>
                <span class="similar-reason">${similar.reason}</span>
            </a>
        `;
    });

    similar_row.scrollLeft = 0;
    update_similar_arrows();
}

function update_similar_arrows() {
    const similar_row = document.getElementById("similar-row");

    document.getElementById("similar-prev").disabled = similar_row.scrollLeft <= 0;
    document.getElementById("similar-next").disabled =
        similar_row.scrollLeft + similar_row.clientWidth >= similar_row.scrollWidth - 1;
}

function switch_edition(edition_id) {
    current_product = products.find(product => product.id === edition_id);
    display_product(current_product);

    let new_url = `/product.html?id=${edition_id}`;

    if (from_page !== "") {
        new_url += `&from=${from_page}`;
    }

    window.history.replaceState(null, "", new_url);
    document.querySelector(".edition-chip.selected").focus();
}

function display_not_found() {
    document.title = "Fragrance Not Found - Fragrantica";

    document.getElementById("product-not-found").style.display = "block";
    document.getElementById("product-top").style.display = "none";
    document.getElementById("product-details").style.display = "none";
    document.getElementById("similar-section").style.display = "none";
}

//Event Listeners
document.getElementById("back-link").addEventListener("click", function(event) {
    event.preventDefault();

    if (window.history.length > 1) {
        window.history.back();
    }
    else {
        window.location.href = "/";
    }
});

document.getElementById("edition-row").addEventListener("click", function(event) {
    const edition_chip = event.target.closest(".edition-chip");

    if (edition_chip && !edition_chip.classList.contains("selected")) {
        switch_edition(edition_chip.dataset.id);
    }
});

document.getElementById("similar-prev").addEventListener("click", function() {
    const similar_row = document.getElementById("similar-row");
    similar_row.scrollBy({ left: -similar_row.clientWidth, behavior: "smooth" });
});

document.getElementById("similar-next").addEventListener("click", function() {
    const similar_row = document.getElementById("similar-row");
    similar_row.scrollBy({ left: similar_row.clientWidth, behavior: "smooth" });
});

document.getElementById("similar-row").addEventListener("scroll", update_similar_arrows);
window.addEventListener("resize", update_similar_arrows);
