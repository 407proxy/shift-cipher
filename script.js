function redirectToDevsPage() {
    window.location.href = "devs.html"; 
}

function redirectToHomePage() {
    window.location.href = "index.html"; 
}

function redirectToChoice() {
    const title = document.querySelector('.shift-cipher-title');
    const aboutText = document.querySelector('.about-text');

    title.classList.add('fade-out');
    aboutText.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = 'choice.html';
    }, 1000); 
}

function redirectToEncode() {
    window.location.href = "encode.html"; 
}

function redirectToDecode() {
    window.location.href = "decode.html"; 
}

document.addEventListener("DOMContentLoaded", function() {
    
    const actionButtons = document.querySelectorAll('.action-button');
    const instructionsTexts = document.querySelectorAll('.instruction-text');
    const textInputArea = document.querySelectorAll('.input-text-form')
    const intInputArea = document.querySelectorAll('.integer-form')

    actionButtons.forEach(button => {
        button.classList.add('fade-in');
    });
    
    instructionsTexts.forEach(text => {
        text.classList.add('fade-in');
    });

    textInputArea.forEach(textInput => {
        textInput.classList.add('fade-in');
    });

    intInputArea.forEach(intInput => {
        intInput.classList.add('fade-in');
    });

    function updateText() {
        var input = document.getElementById("uncodedMessage").value;
        document.getElementById("display-message").innerText = input;
    }
});

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="discrete-math-title">Discrete Math</h1>
        <button class="devs-title" onclick="redirectToDevsPage()">Home</button>
    </div>

    <script src="script.js"></script>
</body>
</html>

*/
