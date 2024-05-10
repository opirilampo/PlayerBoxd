document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach((expandButton) => {
        const reviewBox = expandButton.closest('.reviewbox');
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
    });
});



// ----------------------------------------------------------------------------

function openSingUp() {
    const modal = document.getElementById('modal');

    if (modal.style.display == 'none') {
            modal.style.display = 'flex';
        } else {
            modal.style.display = 'none';
    }
    

}

// ----------------------------------------------------------------------------
let isOpened = false;
function openOptions() {
    const element1 = document.getElementById("d1");
    const element2 = document.getElementById("d2");
    const element3 = document.getElementById("d3");
    const element4 = document.getElementById("d4");

    const hiddenButton1 = document.getElementById("hiddenButton1");
    const hiddenButton2 = document.getElementById("hiddenButton2");

    const hiddenArrow = document.getElementById("hiddenArrow");
    
    if(isSigning==false){
        if (isOpened){
            element1.style.display = "inline-block";
            element2.style.display = "inline-block";
            element3.style.display = "flex";
            element4.style.display = "block";

            hiddenButton1.style.display = "none";
            hiddenButton2.style.display = "none";

            hiddenArrow.style.display = "none";
            isOpened = false;
        }else {
            element1.style.display = "none";
            element2.style.display = "none";
            element3.style.display = "none";
            element4.style.display = "none";

            hiddenButton1.style.display = "inline";
            hiddenButton2.style.display = "inline";

            hiddenArrow.style.display = "flex";
            isOpened = true;
        }
    }else {
        hiddenButton1.style.display = "inline";
        hiddenButton2.style.display = "inline";
        hiddenArrow.style.display = "flex";

        area.style.gridTemplateColumns ="repeat(3, 1fr)"
        optionsButton.style.marginBottom = "0px"
        area.style.justifyItems = "center"
        theLogin.style.display = "none";
        isSigning = false;
    }

}
// ----------------------------------------------------------------------------

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
}
}
// ----------------------------------------------------------------------------
let isSigning = false;    
function openSingIn(){
    const hiddenButton1 = document.getElementById("hiddenButton1");
    const hiddenButton2 = document.getElementById("hiddenButton2");
    const optionsButton = document.getElementById("optionsButton");
    const hiddenArrow = document.getElementById("hiddenArrow");
    const theLogin = document.getElementById ("theLogin")
    const area = document.getElementById("area");
    
    if(isSigning==false){
        hiddenButton1.style.display = "none";
        hiddenButton2.style.display = "none";
        hiddenArrow.style.display = "none";

        area.style.gridTemplateColumns ="90% 10%"
        optionsButton.style.marginBottom = "-10px"
        area.style.justifyItems = "initial"
        theLogin.style.display = "flex";
        isSigning = true;
    }
}

// ----------------------------------------------------------------------------

function login() {
    var username = document.getElementById("usernameLogin").value;
    var senha = document.getElementById("senhaLogin").value;

    var correct_username = localStorage.getItem("username")
    var correct_senha = localStorage.getItem("senha")

    if (correct_username == username  && correct_senha == senha){
        alert ("Entrou")
    }
    else {
        alert("Usuário ou senha incorreto / usuário não encontrado.")
        document.getElementById("senhaLogin").value = ""
    }
}

// ----------------------------------------------------------------------------

function openReview() {
        const reviewModal = document.getElementById('reviewModal');
        const newReviewModal=document.getElementById('new-reviewModal');

        if (reviewModal.style.display == 'none') {
                reviewModal.style.display = 'flex';
                newReviewModal.style.display = 'flex';
            } else {
                reviewModal.style.display = 'none';
                newReviewModal.style.display = 'none'; 
            }
    }

// ----------------------------------------------------------------------------

const select = document.getElementById("games");
const datalist = document.getElementById("games-list");

select.addEventListener("input", function () {
    const termoPesquisa = select.value.toLowerCase();

    for (const option of datalist.options) {
        const textoOpcao = option.value.toLowerCase();
        if (textoOpcao.includes(termoPesquisa)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
});

// ----------------------------------------------------------------------------

games.onfocus = function () {
    gamesList.style.display = 'block';
    games.style.borderRadius = "5px 5px 0 0";  
  };
  for (let option of gamesList.options) {
    option.onclick = function () {
      games.value = option.value;
      gamesList.style.display = 'none';
      games.style.borderRadius = "5px";
    }
  };
  
  games.oninput = function() {
    currentFocus = -1;
    var text = games.value.toUpperCase();
    for (let option of gamesList.options) {
      if(option.value.toUpperCase().indexOf(text) > -1){
        option.style.display = "block";
    }else{
      option.style.display = "none";
      }
    };
  }
  var currentFocus = -1;
  games.onkeydown = function(e) {
    if(e.keyCode == 40){
      currentFocus++
     addActive(gamesList.options);
    }
    else if(e.keyCode == 38){
      currentFocus--
     addActive(gamesList.options);
    }
    else if(e.keyCode == 13){
      e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (gamesList.options) gamesList.options[currentFocus].click();
          }
    }
  }
  
  function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    }