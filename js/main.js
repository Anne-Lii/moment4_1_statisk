//hämtar länkarna i sidomenyn på produktsidan
const categoryLinks = document.querySelectorAll(".sidebar a");

// Hämta alla produkter
const products = document.querySelectorAll(".product");

//Lägger till klick-event på kategorilänkarna
categoryLinks.forEach(link =>{
    link.addEventListener("click", (e) => {
        e.preventDefault();//förhindrar standardlänk-klick
        const category = e.target.textContent.toLowerCase();//Hämtar kategorin från länken

        //Visa/Dölja produkter
        products.forEach(product => {
            if (category==="Alla" || product.CDATA_SECTION_NODE.category ===category) {
                product.computedStyleMap.display = "block";//Visar matchande produkter
            } else {
                product.computedStyleMap.display = "none";//Döljer resten
            }
        });
    });
});