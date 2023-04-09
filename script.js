let myLibrary = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')):[];
const bookName = document.querySelector('#book_Name');
const aurthorName = document.querySelector('#Author');
const divGrid = document.querySelector('.bookGrid');
const selection = document.querySelector('#status');

class Book {
    constructor(name, author, state) {
        this.name = name;
        this.author = author;
        this.state = state;
    }
}
myLibrary.forEach(makeDiv);
function addBookToLibrary() {
    let valueOfSelection = checkState();
    let newBook = new Book(bookName.value,aurthorName.value,valueOfSelection);
    myLibrary.push(newBook);
    localStorage.setItem('item',JSON.stringify(myLibrary));
    console.log(localStorage.getItem('item'));
    makeDiv(myLibrary);
    clear()
}

function makeDiv(array){
    let book = document.createElement('h4');
    book.innerHTML = array[0].name;
    let author = document.createElement('h4');
    author.innerHTML = array[0].author;
    let state = document.createElement('h4');
    state.innerHTML = array[0].state;
    let button = document.createElement('button');
    button.innerHTML = 'Remove';
    let div = document.createElement('div');
    div.appendChild(book);
    div.appendChild(author);
    div.appendChild(state);
    div.appendChild(button);
    divGrid.appendChild(div);
}
function checkState(){
    let stat = selection.options[selection.selectedIndex].value;
    return stat;
}
function clear(){
    bookName.value = ' ';
    aurthorName.value = ' ';
}
function cleanLocal(){
    localStorage.clear();
    console.log(localStorage.item);
    myLibrary.length = 0;
}

