import { db, firestore } from "./firebase.js";

/*
o---------o
| On Load |
o---------o
*/
let companyName = "zaizi";
let questionsData = await fetchData();
renderQuestionCards(questionsData.questions);

/*
o-----------o
| Firestore |
o-----------o
*/

async function fetchData() {
  // Indicate that the page is loading
  $("html").style = "cursor: wait !important";

  const ref = firestore.doc(db, "qcollection", companyName);
  const snap = await firestore.getDoc(ref);
  const data = snap.data();

  // End loading animation
  $("html").style = "cursor: default";

  return data;
}

/*
o------------------o
| Helper Functions |
o------------------o
*/

function $(selector, element = document) {
  return element.querySelector(selector);
}

function $$(selector, element = document) {
  return [...element.querySelectorAll(selector)];
}

function createElement({
  tag,
  className,
  parent,
  parentSelector,
  text = "",
  id,
}) {
  const parentEl = parent || $(parentSelector);
  const newElement = document.createElement(tag);

  if (text) newElement.innerText = text;
  if (className) newElement.classList.add(className);
  if (id) newElement.id = id;
  if (parentEl) parentEl.append(newElement);

  return newElement;
}

function clearElement(selector) {
  $(selector).innerHTML = "";
}

function createNotification(text) {
  const notificationsDiv = document.querySelector(".notifications");
  const notification = createElement({
    tag: "div",
    className: "notification",
    parent: notificationsDiv,
    text: text,
  });

  setTimeout(() => notification.remove(), 3000);
}

/*
o------------------o
| Render Questions |
o------------------o
*/

function renderQuestionCards(questionArr) {
  clearElement(".questions");

  questionArr.forEach(({ question, author }) => {
    const newLi = createElement({
      tag: "li",
      className: "card",
      parentSelector: ".questions",
    });

    const newQuestion = createElement({
      tag: "p",
      className: "card__question",
      parent: newLi,
      text: question,
    });

    const newAuthor = createElement({
      tag: "p",
      className: "card__author",
      parent: newLi,
      text: author,
    });
  });
}

/*
o--------------------------o
| Add Question to Database |
o--------------------------o
*/

// Display Modal
const modal = $(".modal");
const addBtn = $(".add-btn");

addBtn.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("modal--active");
}

// Hide Modal
const modalCloseBtn = $(".modal__close");

modalCloseBtn.addEventListener("click", toggleModal);

// Add question
const modalBtn = $(".modal__button");

modalBtn.addEventListener("click", addToDB);

async function addToDB() {
  const ref = firestore.doc(db, "qcollection", companyName);
  const nameInput = $("#name");
  const questionInput = $("#question");

  await firestore.updateDoc(ref, {
    questions: firestore.arrayUnion({
      question: questionInput.value,
      author: nameInput.value,
    }),
  });

  toggleModal();
  createNotification("Question added successfully!");

  questionsData = await fetchData();
  renderQuestionCards(questionsData.questions);

  // Clean up/Reset form values
  nameInput.value = "";
  questionInput.value = "";
}

/*
o-------------------------------o
| Search questions for keywords |
o-------------------------------o
*/

const searchBar = $(".search");

searchBar.addEventListener("keyup", filterQuestions);

function filterQuestions({ currentTarget }) {
  const filteredQuestionsArr = questionsData.questions.filter((data) =>
    data.question.includes(currentTarget.value)
  );

  renderQuestionCards(filteredQuestionsArr);
}

/*
o---------------------o
| Change company name |
o---------------------o
*/
const selectCompany = $(".company-name");

selectCompany.addEventListener("change", changeCompanyName);

async function changeCompanyName({ currentTarget }) {
  companyName = currentTarget.value.toLowerCase();
  questionsData = await fetchData();
  renderQuestionCards(questionsData.questions);
}
