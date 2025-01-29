const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const contactLink = document.getElementById("contact-link").addEvenetListener("click",function(event) {
    event.preventDefault();
    window.location.href="index1.html";
});

const btnPopup = document.querySelector('.btnLogin-popup');

registerLink.addEventListerner('click',() => {
    wrapper.classList.add('active');
});

loginLink.addEventListerner('click',() => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListerner('click',() => {
    wrapper.classList.remove('active-popup');
});