// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 2500);

    }

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 150;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter-section");

    if (!counterSection) return;

    const sectionTop = counterSection.offsetTop - 400;

    if (window.scrollY > sectionTop && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});

// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showTestimonial(index) {

    testimonials.forEach((item) => {

        item.style.display = "none";

    });

    testimonials[index].style.display = "block";

}

if (testimonials.length > 0) {

    showTestimonial(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= testimonials.length) {

            currentSlide = 0;

        }

        showTestimonial(currentSlide);

    }, 4000);

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".collection-card, .product-card, .why-card, .gallery-grid img, .about-content, .story-content"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// HEADER SHADOW ON SCROLL
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =========================
// SMOOTH BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});

// =========================
// NEWSLETTER FORM
// =========================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = newsletterForm.querySelector("input").value;

        if (email.trim() === "") {

            alert("Please enter your email");

            return;

        }

        alert("Thank you for subscribing!");

        newsletterForm.reset();

    });

}

// =========================
// CURRENT YEAR COPYRIGHT
// =========================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} Stackly Fashion. All Rights Reserved.`;

}