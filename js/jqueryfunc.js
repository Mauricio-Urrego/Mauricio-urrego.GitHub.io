/*animation and effects*/

function hover() {
  document.getElementById("me").src = "content/crossarmed.png";
}

function mouseout() {
  document.getElementById("me").src = "content/me_final.png";
}

$(window).on('load', function(){
    $('#cover').fadeOut(3000);
});
