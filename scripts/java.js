function aaa(){
    const form = document.querySelector('form');
    const data = new URLSearchParams(new FormData(form).entries());

}
function validateForm() {
    let x = document.forms["createLetter"]["toName"].value;
    let y = document.forms["createLetter"]["message"].value;
    let z = document.forms["createLetter"]["fromName"].value;
    if (x == "") {
        alert("To name must be filled out");
        return false;
    }
    if (y == ""){
        alert("Message must be filled out");
        return false;
    }
    if (z == ""){
        alert("From name must be filled out");
        return false;
    }

    showPopup()
}

function showPopup(){
    let toName = document.getElementById('toName').value;
    let message = document.getElementById('message').value;
    let selectOption = document.getElementById('selectBackground').value;
    let fromName = document.getElementById('fromName').value;

    let confirmationMessage = `To: ${toName}\n`;
    confirmationMessage += `Message: ${message}\n`;
    confirmationMessage += `Background: ${selectOption}\n`;
    confirmationMessage += `From: ${fromName}`;

    alert(confirmationMessage);
}

// Get references to the elements
const noneButton = document.getElementById('noneButton');
const heartsButton = document.getElementById('heartsButton');
const teddyButton = document.getElementById('teddyButton');
const gradiantButton = document.getElementById('gradiantButton');
const card = document.querySelector('.card');

noneButton.addEventListener('click', function(){
    card.style.backgroundImage = '';
    card.style.color = 'rgb(73, 64, 64)';
});

// Add event listener to the heart button
heartsButton.addEventListener('click', function() {
    // Change the background image and size of the card
    card.style.backgroundImage = 'url("/images/Hearts.png")';
    card.style.backgroundSize = 'cover';
    card.style.color = '#ee2270';
});

teddyButton.addEventListener('click', function(){
    card.style.backgroundImage = 'url("/images/bears.jpeg")';
    card.style.backgroundSize = 'cover';
    card.style.color = 'rgb(73, 64, 64)';
});

gradiantButton.addEventListener('click', function(){
    card.style.background = '#355C7D';
    card.style.background = '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';  /* Chrome 10-25, Safari 5.1-6 */
    card.style.background = 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)'; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    card.style.color = '#00ffff';
});