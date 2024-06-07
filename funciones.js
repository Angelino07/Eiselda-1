document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const moreProductsSection = document.getElementById('more-products');
    const moreProductsList = document.getElementById('more-products-list');
    const closeMoreProductsButton = document.getElementById('close-more-products');

    const productsData = {
        "pc-gamer": [
            { name: "PC Gamer 1", image: "img/pc 5.WEBP" },
            { name: "PC Gamer 2", image: "img/pc 1.png" }, 
            { name: "PC Gamer 1", image: "img/pc 2.png" },
            { name: "PC Gamer 1", image: "img/pc 3.png" },
            { name: "PC Gamer 2", image: "img/pc 4.png" }
        ],
        "playstation-5": [
            { name: "PlayStation 5 Game 1", image: "img/play 1.jpg" }
        ],
        "xbox-series-s": [
            { name: "Xbox Series S Game 1", image: "img/xbox s.png" },
            { name: "Xbox Series S Game 2", image: "img/xbox x.png" }
        ],
        "nintendo-switch": [
            { name: "Nintendo Switch Game 1", image: "img/nintendo.png" }
        ]
    };

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productKey = button.getAttribute('data-product');
            const products = productsData[productKey];
            moreProductsList.innerHTML = '';

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <p>Descripción del producto.</p>
                    <button class="buy-button">Comprar</button>
                `;
                moreProductsList.appendChild(productElement);
            });

            moreProductsSection.style.display = 'block';

            // Scroll to the more products section
            moreProductsSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    closeMoreProductsButton.addEventListener('click', () => {
        moreProductsSection.style.display = 'none';
    });
});