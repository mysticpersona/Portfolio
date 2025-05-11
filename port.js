document.addEventListener("DOMContentLoaded", function() {
    // Slider functionality
    const scrollWrapper = document.querySelector(".slider-wrapper");
    const scrollAmount = 320; // Adjust based on card width + gap

    document.querySelector(".left-btn").addEventListener("click", function() {
        scrollWrapper.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    document.querySelector(".right-btn").addEventListener("click", function() {
        scrollWrapper.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    // Text animation for paragraphs with 'animate' class
    const paragraphs = document.querySelectorAll(".animate");

    paragraphs.forEach((p, pIndex) => {
        const text = p.innerText;
        p.innerHTML = ""; // Clear the original text

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            p.appendChild(span);

            // Apply animation with delay for each letter
            setTimeout(() => {
                span.classList.add("show");
            }, index * 100 + pIndex * 1000); // Delay based on letter position and paragraph index
        });
    });
});

function scrollToLeft() {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.scrollBy({
        left: -320, // Adjust based on the card width + gap
        behavior: 'smooth'
    });
}

function scrollToRight() {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.scrollBy({
        left: 320, // Adjust based on the card width + gap
        behavior: 'smooth'
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Slider functionality
    const slider = document.querySelector(".cert-slider");
    const card = document.querySelector(".cert-card");
    const scrollAmount = card ? card.offsetWidth + 20 : 320; // Fallback if no card found

    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    if (leftBtn && rightBtn && slider) {
        leftBtn.addEventListener("click", function() {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        rightBtn.addEventListener("click", function() {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }
});