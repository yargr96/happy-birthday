window.onload = function() {
    let
        openPopupBtn = document.getElementById("gift-btn"),
        closePopupBtn = document.getElementById("close-popup-btn");

    openPopupBtn.onclick = openPopup;
    closePopupBtn.onclick = closePopup;
}

function openPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => popup.classList.remove("hidden"), 10);
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.classList.add("hidden");
    setTimeout(() => popup.style.display = 'none', 300);
}