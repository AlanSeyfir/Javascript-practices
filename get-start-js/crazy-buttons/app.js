//grab everything we need
const crazyButton = document.querySelectorAll('.btn-crazy');

//define our functions
function goCrazy(e) {
    const button = e.target;
    //get a random number for the left offset
    //random num for top offset
    const offsetLeft = Math.random() * (window.innerWidth - button.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - button.clientHeight);

    console.log(offsetTop, offsetTop);
    //apply thos numbers to the button
    button.style.top = offsetTop + 'px';
    button.style.left = offsetLeft + 'px';
    //Instead of button I can use this and delete e
}

// add our event listeners
crazyButton.forEach(button => button.addEventListener('mouseenter', goCrazy));