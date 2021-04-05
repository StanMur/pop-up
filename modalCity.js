

let blockModal = document.querySelector('.block-modal');
let btn1 = document.querySelector('.block-buttons__btn1');
let btn2 = document.querySelector('.block-buttons__btn2');
let bodyScreen = document.querySelector('.lock');

btn1.onclick = showNewSite;
btn2.onclick = closeModalWindow;


function a() {
    blockModal.style.display = 'block';

    let sesDat = sessionStorage.getItem('data');
   if ( sesDat == 666 ) {
       blockModal.style.display = 'none';
   }
}
window.onload = a;

function showNewSite() {
    document.location.href = "https://github.com/StanMur";
}
function closeModalWindow() {
    blockModal.style.display = 'none';
    sessionStorage.setItem('data', 666);
    bodyScreen.style.overflow = 'inherit';
}


