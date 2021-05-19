function hideBox(){
    let text = document.getElementById('quote');

    if (text.style.display === 'none') {
        text.style.display = 'block'
    }else{
        text.style.display = 'none'
    }
}