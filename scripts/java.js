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
    return false;
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
