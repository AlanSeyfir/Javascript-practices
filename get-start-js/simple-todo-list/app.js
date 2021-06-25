const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

function showFloater(){
    body.classList.add('show-floater');
}

function closeFloater(){
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');        
    }
}

//I think with this I can use tab
input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

//==============================

const bookmarkList = document.querySelector('.bookmark-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = document.querySelector('input[type=text]');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const apiUrl = 'https://opengraph.io/api/1.0/site';
const appId = '58858c7bcf07b61e64257391';

fillBookmarksList(bookmarks);

//e means event
function createBookmark(e){
    e.preventDefault();

    //add a new bookmark to the bookmarks
    const title = bookmarkInput.value;
    const bookmark = {
        title: title
    };
    bookmarks.push(bookmark);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();

    console.table(bookmark);
    //save that bookmarks list in localstorage
    
    // const title = bookmarkInput.value;
    // const bookmark = document.createElement('a');
    // bookmark.className = 'bookmark';
    // bookmark.innerText = title;
    // bookmark.href = '#';
    // bookmark.target = '_blank';

    // bookmarkList.appendChild(bookmark);

    
}

//For each one of our bookmarks add it to this list
function fillBookmarksList(bookmarks = []){
    //map we formatted to want we want in return
    const bookmarksHtml = bookmarks.map((bookmark, i) =>{
        return `
            <a href="#" class="bookmark" data-id="${i}">
                <div class ="img"></div>
                ${bookmark.title}
                <span class="glyphicon glyphicon-remove">✖</span>
            </a>
        `;
    }).join('');

    // let bookmarksHtml = '';
    // for(i = 0; i < bookmarks.length; i++){
    //     bookmarksHtml += `
    //         <a href="#" class="bookmark">
    //             ${bookmarks[i].title}
    //         </a>
    //     `;
    // }

    //console.log(bookmarksHtml);
    bookmarkList.innerHTML = bookmarksHtml;
}

function storeBookmarks(bookmarks = []){
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function removeBookmarks(e){
    if (!e.target.matches('.glyphicon-remove')) return;
    //find index
    //remove from the bookmarks using splice
    //fill the list
    //store back the localStorage
    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    console.log(index);
    
}

bookmarkForm.addEventListener('submit', createBookmark);
bookmarkList.addEventListener('click', removeBookmarks);