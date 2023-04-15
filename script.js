let myLibrary = [];
const DEFAULT_DATA = [
    {
      name: "Alice in Wonderland",
      author: "Lewis Caroll",
      state: "not read",
    },]

let bookName = document.querySelector('#book_Name');
let authorName = document.querySelector('#Author');
let stats = document.querySelector('#status');
let divGrid = document.querySelector('.bookSpace');


class Book{
    constructor(name,author,state){
        this.name = name;
        this.author = author;
        this.state = state;
    }
}
function addBookToLibrary(){
    if(bookName.value.length === 0 || authorName.value.length ===  0){
        alert("Please complete the in put");
        return;
    }
    let bookDetail = new Book(bookName.value, authorName.value,stats.value);
    myLibrary.push(bookDetail);
    updateLocalStorage();
    render();
    location.reload();
}
function checkLocalStorage(){
    if(localStorage.getItem('library')){
        myLibrary = JSON.parse(localStorage.getItem('library'));
    }else{
        myLibrary = DEFAULT_DATA;
    }
}
function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
    //library = JSON.parse(localStorage.getItem("library"));
  }
function remove(index){
    console.log(index)
    myLibrary.splice(index,index+1);
    updateLocalStorage();
    location.reload();
}
function  render(){
    checkLocalStorage();
    console.log(myLibrary);
    myLibrary.forEach((books, currentIndex)=>{
        let bookSpace = document.createElement('h4');
        bookSpace.innerText = books.name;
        let authorSpace = document.createElement('h4');
        authorSpace.innerText = books.author;
        let statusSpace = document.createElement('h4');
        statusSpace.innerText = books.state;
        let button = document.createElement('button');
        button.innerText = 'Remove';
        button.setAttribute('onclick','remove('+currentIndex+')');
        let div = document.createElement('div');

        div.appendChild(bookSpace);
        div.appendChild(authorSpace);
        div.appendChild(statusSpace);
        div.appendChild(button);

        divGrid.appendChild(div);
    })
}
render()