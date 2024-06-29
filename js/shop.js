// Codice JavaScript
const productsPerPage = 12; // Numero di prodotti per pagina
const totalProducts = document.querySelectorAll('.shop-product').length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

const shopGrid = document.getElementById('shop-grid');
const pagination = document.getElementById('pagination');

// Array di nodi .shop-product
const productNodes = Array.from(document.querySelectorAll('.shop-product'));

function generateProductGrid(page) {
    // Pulisci la griglia prima di aggiungere nuovi prodotti
    shopGrid.innerHTML = '';

    // Calcola l'indice del primo prodotto sulla pagina corrente
    const startIndex = (page - 1) * productsPerPage;

    // Clona i nodi .shop-product per la pagina corrente
    const productsToShow = productNodes.slice(startIndex, startIndex + productsPerPage);
    productsToShow.forEach(product => {
        const clonedProduct = product.cloneNode(true);
        const heartIcon = clonedProduct.querySelector('.fa-heart');
        // Aggiungi un gestore di eventi al clic del mouse sull'icona del cuore
        heartIcon.addEventListener('click', function() {
            // Cambia la classe dell'icona del cuore
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
            // Cambia il colore dell'icona del cuore
            if (heartIcon.classList.contains('fa-regular')) {
                heartIcon.style.color = ''; // Reimposta il colore predefinito
            } else {
                heartIcon.style.color = '#D6968B'; // Imposta il colore desiderato
            }
        });
        shopGrid.appendChild(clonedProduct);
    });
}

function changePage(page) {
    generateProductGrid(page);
}

function generatePagination() {
    // Pulisci la paginazione prima di aggiungere i pulsanti
    pagination.innerHTML = '';

    // Itera su ogni pagina e crea un pulsante per ciascuna
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = function() {
            changePage(i);
        };
        pagination.appendChild(button);
    }
}

// Genera la griglia dei prodotti e i pulsanti della paginazione all'avvio
generateProductGrid(1);
generatePagination();

