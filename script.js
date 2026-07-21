
/* ==========================================================
   Rahul Portfolio
   Premium Script.js
   Part 1
========================================================== */

/* ==========================================================
   AOS Initialization
========================================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out"
});

/* ==========================================================
   Typed.js
========================================================== */

const typedElement = document.querySelector("#typing");

if (typedElement) {

    new Typed("#typing", {

        strings: [
            "Senior Full Stack Developer",
            "Node.js Expert",
            "AWS Cloud Engineer",
            "Microservices Architect",
            "Backend Developer",
            "React & Angular Developer"
        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        startDelay: 300,

        loop: true,

        smartBackspace: true

    });

}

/* ==========================================================
   Smooth Scroll
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

/* ==========================================================
   Active Navigation
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================================
   Scroll Progress Bar
========================================================== */

const progressBar = document.createElement("div");

progressBar.id = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================================
   Particles.js
========================================================== */

if (document.getElementById("particles-js")) {

    particlesJS("particles-js", {

        particles: {

            number: {

                value: 80,

                density: {

                    enable: true,

                    value_area: 900

                }

            },

            color: {

                value: "#00E5FF"

            },

            shape: {

                type: "circle"

            },

            opacity: {

                value: 0.5

            },

            size: {

                value: 3,

                random: true

            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#00E5FF",

                opacity: 0.35,

                width: 1

            },

            move: {

                enable: true,

                speed: 2,

                direction: "none",

                random: false,

                straight: false,

                out_mode: "out"

            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                },

                onclick: {

                    enable: true,

                    mode: "push"

                }

            },

            modes: {

                grab: {

                    distance: 150,

                    line_linked: {

                        opacity: 0.8

                    }

                },

                push: {

                    particles_nb: 4

                }

            }

        },

        retina_detect: true

    });

}

/* ==========================================================
   Window Loaded
========================================================== */

window.addEventListener("load", () => {

    console.log("✅ Portfolio Loaded Successfully");

});



/* ==========================================================
   Rahul Portfolio
   Premium Script.js
   Part 2
========================================================== */

/* ==========================================================
   Theme Toggle
========================================================== */

const themeToggle = document.getElementById("theme-toggle");

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});

/* Restore Theme */

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        const icon = themeToggle.querySelector("i");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

});

/* ==========================================================
   Mobile Menu
========================================================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinksContainer = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {

    navLinksContainer.classList.toggle("show");

    menuBtn.classList.toggle("open");

});

/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinksContainer.classList.remove("show");

        menuBtn.classList.remove("open");

    });

});

/* ==========================================================
   Sticky Header Shadow
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* ==========================================================
   Scroll To Top Button
========================================================== */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   Achievement Counter Animation
========================================================== */

const counters = document.querySelectorAll(".achievement-card h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        const target = parseFloat(text);

        const suffix = text.replace(/[0-9.]/g, "");

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count) + suffix;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = text;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================================================
   Skill Progress Bar Animation
========================================================== */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.width = width;

            }, 200);

            progressObserver.unobserve(bar);

        }

    });

}, {

    threshold: 0.4

});

progressBars.forEach(bar => progressObserver.observe(bar));

/* ==========================================================
   Reveal Cards with Delay
========================================================== */

const cards = document.querySelectorAll(

    ".project-card, .skill-card, .aws-card"

);

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.08}s`;

});

/* ==========================================================
   Console Branding
========================================================== */

console.log("%cRahul Portfolio", "font-size:24px;color:#00E5FF;font-weight:bold;");
console.log("%cBuilt with ❤️ using HTML, CSS & JavaScript", "color:#6C63FF;font-size:14px;");


/* ==========================================================
   Rahul Portfolio
   Premium Script.js
   Part 3 (Final)
========================================================== */

/* ==========================================================
   EmailJS Initialization
========================================================== */

(function () {

    if (typeof emailjs !== "undefined") {

        emailjs.init("YOUR_PUBLIC_KEY");

    }

})();

/* ==========================================================
   Contact Form
========================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitButton = this.querySelector("button");

        submitButton.disabled = true;

        submitButton.innerHTML = "Sending...";

        const formData = {

            from_name: this.querySelector('input[type="text"]').value,

            from_email: this.querySelector('input[type="email"]').value,

            subject: this.querySelectorAll('input[type="text"]')[1].value,

            message: this.querySelector("textarea").value

        };

        emailjs.send(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            formData

        )

        .then(() => {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message.");

        })

        .finally(() => {

            submitButton.disabled = false;

            submitButton.innerHTML = "Send Message";

        });

    });

}

/* ==========================================================
   Cursor Glow
========================================================== */

const cursor = document.createElement("div");

cursor.id = "cursor-glow";

document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/* ==========================================================
   Parallax Effect
========================================================== */

const profileCard = document.querySelector(".profile-card");

window.addEventListener("mousemove", (e) => {

    if (!profileCard) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    profileCard.style.transform =

        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    if (profileCard) {

        profileCard.style.transform = "rotateX(0) rotateY(0)";

    }

});

/* ==========================================================
   Lazy Loading Images
========================================================== */

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const image = entry.target;

            image.classList.add("loaded");

            imageObserver.unobserve(image);

        }

    });

}, {

    threshold: 0.2

});

lazyImages.forEach(img => imageObserver.observe(img));

/* ==========================================================
   Keyboard Shortcuts
========================================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    if (e.key.toLowerCase() === "p") {

        document.getElementById("projects")?.scrollIntoView({

            behavior: "smooth"

        });

    }

    if (e.key.toLowerCase() === "c") {

        document.getElementById("contact")?.scrollIntoView({

            behavior: "smooth"

        });

    }

});

/* ==========================================================
   Fade Hero on Scroll
========================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.opacity =

        Math.max(0.2, 1 - window.scrollY / 700);

});

/* ==========================================================
   Card Tilt Effect
========================================================== */

document.querySelectorAll(

    ".project-card, .skill-card, .aws-card"

).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 18;

        const rotateY = (rect.width / 2 - x) / 18;

        card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==========================================================
   Current Year
========================================================== */

const year = document.getElementById("year");

if (year) {

    year.innerText = new Date().getFullYear();

}

/* ==========================================================
   Loading Screen
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});

/* ==========================================================
   Console Message
========================================================== */

console.log("%c🚀 Rahul Portfolio", "font-size:26px;color:#00E5FF;font-weight:bold;");
console.log("%cDeveloped using HTML5 • CSS3 • JavaScript", "color:#6C63FF;font-size:14px;");
console.log("%cReady for GitHub Pages Deployment", "color:#10B981;font-size:14px;");

/* ==========================================================
   App Ready
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Portfolio initialized successfully.");

});
