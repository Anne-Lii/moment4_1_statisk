//hämtar länkarna i sidomenyn på produktsidan
const categoryLinks = document.querySelectorAll(".sidebar a");

// Hämta alla produkter
const products = document.querySelectorAll(".product");

// Hämta hamburgerknappen och navigationslistan
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main_nav ul');

//Hämtar slides från enskildproduktsida
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

//Lägger till klick-event på kategorilänkarna
categoryLinks.forEach(link =>{
    link.addEventListener("click", (e) => {
        e.preventDefault();//förhindrar standardlänk-klick

        const category = e.target.dataset.category;//Hämtar kategorin från länken

        //Visa/Dölja produkter
        products.forEach(product => {
            if (category==="alla" || product.dataset.category === category) {
                product.style.display = "block";//Visar matchande produkter
            } else {
                product.style.display = "none";//Döljer resten
            }
        });
    });
});

// Kontrollerar att elementen hittas
if (hamburger && navMenu) {
    
    // Lägger till klickhändelse för att toggla menyn
    hamburger.addEventListener('click', () => {
        
        navMenu.classList.toggle('active');
       
    });
} else {
    console.error("Hamburger eller navigeringsmenyn kunde inte hittas!");
}

//Bildvisning på enskild produktsida
document.querySelector('.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
});