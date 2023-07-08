// Typing Animation
var typed = new Typed('#element', {
    strings: ['Front-end Developer', 'Web Designer', 'Coder'],
    typeSpeed: 50,
});
// for menu bar
function openmenu() {
    document.getElementById("right").style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}
function closemenu() {
    document.getElementById("right").style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}

// Scroll Animation
ScrollReveal({
    reset:true,
    distance:'50px',
    duration:2000,
    delay:100,
});
ScrollReveal().reveal('.leftsec h3', {origin:'left' });
ScrollReveal().reveal('.leftsec p', {origin:'right' });
ScrollReveal().reveal('.box1 h3,.detail', {origin:'top' });
ScrollReveal().reveal('.box1 .virtical-desc,.box1 .button,.containers .logo,.form,about-text', {origin:'bottom' });