function showSurprise() {
    const message = document.getElementById('messageText');
    message.innerHTML += " I Love you Insan 😘";
    
    const loveButton = document.getElementById('loveButton');
    loveButton.classList.add('clicked');
    
    // Reset animation after it finishes
    setTimeout(() => {
        loveButton.classList.remove('clicked');
    }, 1000);
}
