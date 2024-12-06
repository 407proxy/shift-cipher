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
    const fadeInElements = [
        '.action-button',
        '.instruction-text',
        '.input-text-form',
        '.integer-form',
        '.display-message'
    ];

    function addFadeInClass(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('fade-in');
        });
    }

    fadeInElements.forEach(selector => addFadeInClass(selector));
});

function caesarCipher(str, shift) {
    return Array.from(str).map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { 
            return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) { 
            return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
        } else {
            return char; 
        }
    }).join('');
}

function updateOutputDecode() {
    const inputText = document.getElementById('coded-message').value; 
    const shiftValue = parseInt(document.getElementById('shift-key-decode').value) || 0; 
    const decrypted = caesarCipher(inputText, -shiftValue); 
    document.getElementById('display-message').innerText = decrypted; 
}

function updateOutputEncode() {
    const inputText = document.getElementById('uncoded-message').value; 
    const shiftValue = parseInt(document.getElementById('shift-key-encode').value) || 0; 
    const encrypted = caesarCipher(inputText, shiftValue); 
    document.getElementById('display-message-encode').innerText = encrypted; 
}

function showShiftKey() {
   const shiftValue = parseInt(document.getElementById('shift-key-decode').value) || 0;
   let negativeShiftValue;
   let positiveShiftValue;

   if (shiftValue > 0) {
       negativeShiftValue = -shiftValue;
       positiveShiftValue = 26 - shiftValue;
   } else if (shiftValue < 0) {
       negativeShiftValue = -shiftValue; 
       positiveShiftValue = 26 + shiftValue;
   } else {
       negativeShiftValue = 0; 
       positiveShiftValue = 0; 
   }

   document.getElementById('k').innerText = `Negative Shift: ${negativeShiftValue}, Positive Shift: ${positiveShiftValue}`; 
}

document.getElementById('coded-message').addEventListener('input', updateOutputDecode);
document.getElementById('shift-key-decode').addEventListener('input', function() {
   updateOutputDecode(); 
   showShiftKey(); 
});

// sweatyy sauna

document.getElementById('uncoded-message').addEventListener('input', updateOutputEncode);
document.getElementById('shift-key-encode').addEventListener('input', updateOutputEncode);
