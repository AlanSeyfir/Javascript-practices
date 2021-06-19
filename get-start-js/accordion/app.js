const accordion = document.querySelector('.accordion');
//Do I need to use ALL?
const items = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

//*What is this.parentNode, classList.toggle, overflow-y: scroll;
function toggleAccordion(){
    const thisItem = this.parentNode;

    //If I want to maintain ONLY ONE open
    items.forEach(item =>{
        if (thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }

        item.classList.remove('open');
    });

    console.log(this);
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));