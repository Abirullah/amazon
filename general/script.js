let cards = document.getElementById('prograss');
let cardsElements = Array.from(cards.children); // Convert HTMLCollection to Array for forEach

cardsElements.forEach((gitem) => {
    gitem.addEventListener('click', () => {
        // Remove active class from all items
        cardsElements.forEach((item) => {
            item.classList.remove('active');
        });

        // Add active class to the clicked item
        gitem.classList.add('active');
    });
});
