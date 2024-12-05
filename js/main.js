//hämtar länkarna i sidomenyn på produktsidan
const categoryLinks = document.querySelectorAll(".sidebar a");

// Hämta alla produkter
const products = document.querySelectorAll(".product");

// Hämta hamburgerknappen och navigationslistan
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main_nav ul');

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