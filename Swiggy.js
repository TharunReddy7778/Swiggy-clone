


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.category-slider');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let scrollAmount = 0;

    function updateScrollButtons() {
        prevButton.disabled = scrollAmount <= 0;
        nextButton.disabled = scrollAmount >= slider.scrollWidth - slider.clientWidth;
    }

    nextButton.addEventListener('click', () => {
        scrollAmount = Math.min(scrollAmount + slider.clientWidth, slider.scrollWidth - slider.clientWidth);
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateScrollButtons();
    });

    prevButton.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - slider.clientWidth, 0);
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateScrollButtons();
    });

    // Initial button state
    updateScrollButtons();
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing category slider code...

    // Restaurant slider
    const restaurantSlider = document.querySelector('.restaurant-slider');
    const prevRestaurantButton = document.querySelector('.prev-restaurant');
    const nextRestaurantButton = document.querySelector('.next-restaurant');
    let restaurantScrollAmount = 0;

    function updateRestaurantButtons() {
        prevRestaurantButton.disabled = restaurantScrollAmount <= 0;
        nextRestaurantButton.disabled = restaurantScrollAmount >= restaurantSlider.scrollWidth - restaurantSlider.clientWidth;
    }

    nextRestaurantButton.addEventListener('click', () => {
        restaurantScrollAmount = Math.min(restaurantScrollAmount + restaurantSlider.clientWidth, restaurantSlider.scrollWidth - restaurantSlider.clientWidth);
        restaurantSlider.scrollTo({
            left: restaurantScrollAmount,
            behavior: 'smooth'
        });
        updateRestaurantButtons();
    });

    prevRestaurantButton.addEventListener('click', () => {
        restaurantScrollAmount = Math.max(restaurantScrollAmount - restaurantSlider.clientWidth, 0);
        restaurantSlider.scrollTo({
            left: restaurantScrollAmount,
            behavior: 'smooth'
        });
        updateRestaurantButtons();
    });

    // Initial button state
    updateRestaurantButtons();
});