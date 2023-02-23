/*animation and effects*/

let crossArmedPreload = new Image();
crossArmedPreload.src = 'content/crossarmed.png';

function hover() {
  document.getElementById("me").src = "content/crossarmed.png";
}

function mouseout() {
  document.getElementById("me").src = "content/me_final.png";
}

function fadeOutEffect() {
    let fadeTarget = document.getElementById("cover");
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
    fadeTarget.addEventListener('transitionend', () => fadeTarget.remove());
}

document.addEventListener("DOMContentLoaded", function(event) {
    fadeOutEffect();
});
