let btn = document.querySelector('.lamp-bottom');
let lampLight = document.querySelector('.lamp-light');
let body = document.body;

btn.onclick = () => {
    lampLight.classList.toggle('open');

    body.classList.toggle('body');
    
}