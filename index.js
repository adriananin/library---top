function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

// const alchemist = new Book(
//   "The Alchemist",
//   "Paulo Coelho",
//   "288",
//   "has been read"
// );

// console.log(alchemist.info());

let myLibrary = [
  { title: "ephesians", author: "paul", pages: 3, read: "yes" },
  { title: "acts", author: "luke", pages: 16, read: "yes" },
  { title: "genesis", author: "moses", pages: 21, read: "yes" },
];

function addBookToLibrary() {
  let title = prompt("Enter the title of the book:");
  let author = prompt("Enter the author of the book:");
  let pages = prompt("Enter the number of pages in the book:");
  let read = prompt("Have you read the book? (yes or no)");
  let alchemist = new Book(title, author, pages, read);
  myLibrary.push(alchemist);
}

function displayBook() {
  for (const book of myLibrary) {
    console.log(`${book.title} by ${book.author}`);
  }
}

// addBookToLibrary();

// displayBook();

const addFormBtn = document.querySelector(".buttoncard");
addFormBtn.addEventListener("click", createForm);

function createForm() {
  // Create form element
  const form = document.createElement("form");
  form.classList.add("centered-form");

  // Create input fields
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Input 1";

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Input 2";

  const input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "Input 3";

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  const checkboxLabel = document.createElement("label");
  checkboxLabel.htmlFor = "checkbox";
  checkboxLabel.appendChild(document.createTextNode("Checkbox"));

  // Add inputs and checkbox to form
  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(input3);
  form.appendChild(checkbox);
  form.appendChild(checkboxLabel);

  // Add form to page

  const formCon = document.querySelector("body");
  formCon.appendChild(form);

  // const formContainer = document.querySelector(".form--container");
  // formContainer.appendChild(form);

  // const formOverlay = document.querySelector(".form-overlay");
  // formOverlay.classList.add("overlay");
  // const overlay = document.createElement("div");
  // overlay.id = "overlay";
  // overlay.style.position = "fixed";
  // overlay.style.top = "0";
  // overlay.style.left = "0";
  // overlay.style.width = "100%";
  // overlay.style.height = "100%";
  // overlay.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  // overlay.style.zIndex = "9998";
  // document.body.appendChild(overlay);
}
