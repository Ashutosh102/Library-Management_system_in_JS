let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.userInfo = function() {
    if (this.read) {
        console.log(this.read);
        return this.title + " by " + this.author + ", " + this.pages + " pages, Has read.";
    } else {
        console.log(this.read);
        return this.title + " by " + this.author + ", " + this.pages + " pages, Has not read.";
    }
}

function AddBook() {
    console.log("Added new book");
    //Gets element where all books go.
    bookContainer = document.getElementById('book-container');

    //Create all elements required for a books card
    newBook = document.createElement('div');
    newBookHeader = document.createElement('div');
    newBookEdit = document.createElement('img');
    newBookRemove = document.createElement('img');
    newBookTitle = document.createElement('h2');
    newBookAuthor = document.createElement('h4');
    newBookPages = document.createElement('p');
    newBookButton = document.createElement('div');
    newBookButtonCircle = document.createElement('div');

    //Set all elements properties
    newBook.className = 'book';
    newBookHeader.id = 'book-header';
    newBookRemove.src = "images/DeleteIcon.svg";
    newBookRemove.id = 'icon';
    newBookRemove.addEventListener("click", RemoveBook, false);
    newBookEdit.src = "images/EditIcon.svg";
    newBookEdit.id = 'icon';
    newBookEdit.addEventListener("click", EditBook, false);
    newBookTitle.id = 'book-text';
    newBookTitle.textContent = "Book Title";
    newBookAuthor.id = 'book-text';
    newBookAuthor.textContent = "Book Author";
    newBookPages.id = 'book-text';
    newBookPages.textContent = "Book Pages";
    newBookButton.className = 'toggle-button'
    newBookButtonCircle.className = 'inner-circle';

    //Add all elements to the html
    bookContainer.appendChild(newBook);
    newBook.appendChild(newBookHeader);
    newBookHeader.appendChild(newBookRemove);
    newBookHeader.appendChild(newBookEdit);
    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookButton);
    newBookButton.appendChild(newBookButtonCircle);
}

function RemoveBook() {
    console.log("Removed book");
    //Gets the element where are books are
    bookContainer = document.getElementById('book-container');

    //Get needed elements to delete the book card
    let booksHeader = event.target.parentNode;
    let booksCard = booksHeader.parentNode;

    //Remove the books card when delete is clicked
    bookContainer.removeChild(booksCard);
}

function EditBook() {
    console.log("Editing book");
    //Elements to get book elements
    let booksHeader = event.target.parentNode;
    let booksCard = booksHeader.parentNode;

    //Book elements to change
    bookTitle = booksCard.children[1];
    bookAuthor = booksCard.children[2];
    bookPages = booksCard.children[3];

    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookPages);

    //Create form to fill out new book information
    //Create elements
    bookFormBackground = document.createElement('div');
    bookForm = document.createElement('div');
    bookFormButtonDiv = document.createElement('div');
    bookFormName = document.createElement('h2');
    bookInputTitle = document.createElement('input');
    bookInputAuthor = document.createElement('input');
    bookInputPages = document.createElement('input');
    bookInputSave = document.createElement('img');
    bookInputCancel = document.createElement('img');
    bookFormError = document.createElement('p');
    bookInputSave.addEventListener("click", SaveBookInfo, false);
    bookInputCancel.addEventListener("click", CancelEdit, false);

    //Give elements properties
    bookFormBackground.className = 'form-background';
    bookForm.className = 'form';
    bookFormButtonDiv.className = 'button-div';
    bookFormName.textContent = "Book Editor"
    bookInputTitle.className = 'input';
    bookInputAuthor.className = 'input';
    bookInputPages.className = 'input';
    bookInputTitle.placeholder = "Books Title";
    bookInputAuthor.placeholder = "Authors Name";
    bookInputPages.placeholder = "Pages";
    bookInputTitle.type = 'text';
    bookInputAuthor.type = 'text';
    bookInputPages.type = 'number';
    bookInputSave.src = "images/SaveIcon.svg"
    bookInputCancel.src = "images/DeleteIcon.svg"
    bookInputSave.id = 'icon';
    bookInputCancel.id = 'icon';

    //Add elements to website
    document.body.appendChild(bookFormBackground);
    bookFormBackground.appendChild(bookForm);
    bookForm.appendChild(bookFormName);
    bookForm.appendChild(bookInputTitle);
    bookForm.appendChild(bookInputAuthor);
    bookForm.appendChild(bookInputPages);
    bookForm.appendChild(bookFormButtonDiv);
    bookFormButtonDiv.appendChild(bookInputSave);
    bookFormButtonDiv.appendChild(bookInputCancel);
    bookForm.appendChild(bookFormError);

    function SaveBookInfo() {
        if (bookInputTitle.value === "") {
            bookFormError.textContent = "Missing book title";
        } else if (bookInputAuthor.value === "") {
            bookFormError.textContent = "Missing book author";
        } else if (bookInputPages.value === "") {
            bookFormError.textContent = "Missing number of pages";
        } else {
            bookTitle.textContent = bookInputTitle.value;
            bookAuthor.textContent = bookInputAuthor.value;
            bookPages.textContent = bookInputPages.value + " Pages";

            document.body.removeChild(bookFormBackground);
        }
    }

    function CancelEdit() {
        document.body.removeChild(bookFormBackground);
    }

}