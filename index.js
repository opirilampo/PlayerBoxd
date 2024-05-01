const reviewBox = document.getElementById('review-box');
const expandButton = reviewBox.querySelector('.expand-button');

let isExpanded = false;

function toggleExpand() {
    if (isExpanded) {
        reviewBox.style.height = '22%';
        expandButton.classList.remove('img-expand');
    } else {
        reviewBox.style.height = 'auto';
        expandButton.classList.add('img-expand');
    }
    isExpanded = !isExpanded;
}

expandButton.addEventListener('click', toggleExpand);



const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});



function SignUp() {
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var senha = document.getElementById("senha").value;
var con_senha = document.getElementById("con_senha").value;


var conf = 0

if (con_senha != senha) {
    document.getElementById("con_senha").value = ""
    conf = 1
}


if (conf == 0) {
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('senha', senha)
    localStorage.setItem('nome', nome)
    
}
}