const bookContainer = document.querySelector(".card--container");
const addFormBtn = document.querySelector(".addbook");
addFormBtn.addEventListener("click", toggleContainerDiv);
addFormBtn.addEventListener("click", createForm);

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

let myLibrary = [];

function toggleContainerDiv() {
  const div = document.querySelector(".form--container");
  div.style.display = "flex";
}

function createForm() {
  const form = document.createElement("form");
  form.classList.add("centered-form");

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Add New Book";
  formTitle.classList.add("formtitle");

  const title = document.createElement("input");
  title.classList.add("input");
  title.type = "text";
  title.placeholder = "The book title";
  title.id = "title";

  const author = document.createElement("input");
  author.classList.add("input");
  author.type = "text";
  author.placeholder = "The book author";
  author.id = "author";

  const pages = document.createElement("input");
  pages.classList.add("input");
  pages.type = "number";
  pages.placeholder = "Number of pages";
  pages.id = "pages";

  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkBoxDiv");
  const checkbox = document.createElement("input");
  checkbox.classList.add("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("label");
  checkboxLabel.htmlFor = "checkbox";
  checkboxLabel.appendChild(document.createTextNode("Have you read it ?"));
  checkboxDiv.appendChild(checkbox);
  checkboxDiv.appendChild(checkboxLabel);

  const submit = document.createElement("button");
  submit.classList.add("submitBtn");
  submit.innerHTML = "Submit";

  form.appendChild(formTitle);
  form.appendChild(title);
  form.appendChild(author);
  form.appendChild(pages);
  form.appendChild(checkboxDiv);
  form.appendChild(submit);

  submit.addEventListener("click", displayBook);
  submit.addEventListener("click", addBookToLibrary);

  const formCon = document.querySelector(".form--container");
  formCon.appendChild(form);
}

const removeEventListeners = () => {
  submit.removeEventListener("click", displayBook);
  submit.removeEventListener("click", addBookToLibrary);
};

function hideForm() {
  const hide = document.querySelector(".form--container");
  hide.style.display = "none";
  removeEventListeners();
}

function addBookToLibrary() {
  bookContainer.innerHTML = ""; // clear existing book cards

  const newBookFormElem = document.querySelector(".centered-form");
  newBookFormElem.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const newPages = document.querySelector("#pages").value;
    const newRead = document.querySelector("#checkbox").checked;

    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));

    const formDisplay = document.querySelector(".form--container");
    formDisplay.innerHTML = "";

    displayBook();
    hideForm();
  });
}

function displayBook() {
  for (const book of myLibrary) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("card");
    const titleElement = document.createElement("p");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `${book.pages} pages`;

    const readElement = document.createElement("p");
    readElement.textContent = book.read ? "Read" : "Not read yet";

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.id = "read";
    toggleReadBtn.textContent = book.read ? "Mark as Unread" : "Mark as Read";
    toggleReadBtn.addEventListener("click", function () {
      book.read = !book.read;
    });

    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(pagesElement);
    bookDiv.appendChild(readElement);
    bookDiv.appendChild(toggleReadBtn);
    bookContainer.appendChild(bookDiv);
  }
}
