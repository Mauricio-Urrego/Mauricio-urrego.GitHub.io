/*animation and effects*/

var crossArmedPreload = new Image();
crossArmedPreload.src = 'content/crossarmed.png';

function hover() {
  document.getElementById("me").src = "content/crossarmed.png";
}

function mouseout() {
  document.getElementById("me").src = "content/me_final.png";
}

$(window).on('load', function(){
    $('#cover').fadeOut(3000);
});
