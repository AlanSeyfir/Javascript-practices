let element = document.getElementById('imgScreen');

function fullscreen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    }
}