var photo = document.getElementById("photo");
var num_photo = 1;

function phPrec(){
    if (num_photo > 1 ) {
        num_photo--;
    } else {
        num_photo = 6;
    }
    photo.setAttribute('src','img/img'+num_photo+'.png');
}

function phNext(){
        if (num_photo < 6 ) {
        num_photo++;
    } else {
        num_photo = 1;
    }
    photo.setAttribute('src','img/img'+num_photo+'.png');
}

function ZoomOut() {
    var taille= parseInt(photo.getAttribute('width'));
    photo.setAttribute('width',taille-20);
}
function ZoomIn() {
    var taille= parseInt(photo.getAttribute('width'));
    photo.setAttribute('width',taille+20);
}