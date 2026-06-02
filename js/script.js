// ===============================
// MENU MOVIL
// ===============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if(menuBtn){


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


}

// ===============================
// CERRAR MENU AL DAR CLICK
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {


link.addEventListener("click", () => {

    nav.classList.remove("active");

});


});

// ===============================
// CONTADORES ANIMADOS
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {


counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {

        const current = +counter.innerText;

        const increment = target / 80;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


};

let counterStarted = false;

window.addEventListener("scroll", () => {


const statsSection =
document.querySelector(".stats");

if(!statsSection) return;

const sectionTop =
statsSection.offsetTop - 400;

if(window.scrollY >= sectionTop &&
   !counterStarted){

    startCounter();

    counterStarted = true;

}


});

// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
    this.getAttribute("href")
    );

    if(target){

        target.scrollIntoView({

            behavior:"smooth"

        });

    }

});


});

// ===============================
// FORMULARIO
// ===============================

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit", (e)=>{


const nombre =
form.querySelector(
'input[name="nombre"]'
);

const correo =
form.querySelector(
'input[name="correo"]'
);

const mensaje =
form.querySelector(
'textarea[name="mensaje"]'
);

if(
    nombre.value.trim() === "" ||
    correo.value.trim() === "" ||
    mensaje.value.trim() === ""
){

    e.preventDefault();

    alert(
    "Por favor complete todos los campos."
    );

    return;

}

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(
    !emailRegex.test(correo.value)
){

    e.preventDefault();

    alert(
    "Ingrese un correo válido."
    );

    return;

}


});

}

// ===============================
// HEADER AL HACER SCROLL
// ===============================

window.addEventListener("scroll", () => {


const header =
document.querySelector("header");

if(window.scrollY > 80){

    header.style.background =
    "rgba(2,27,78,.98)";

}else{

    header.style.background =
    "rgba(2,27,78,.96)";

}


});

// ===============================
// ANIMACION DE APARICION
// ===============================

const revealElements =
document.querySelectorAll(
'.card, .testimonial, details'
);

const revealOnScroll = () => {

revealElements.forEach(el => {

    const elementTop =
    el.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if(elementTop <
       windowHeight - 100){

        el.classList.add("show");

    }

});


};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ===============================
// AÑO AUTOMATICO EN FOOTER
// ===============================

const copyright =
document.getElementById("copyright");

if(copyright){

    fcopyright.innerHTML =
    `© ${new Date().getFullYear()} Lo.Contable | Todos los derechos reservados`;


}

