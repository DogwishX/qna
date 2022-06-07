import { db, firestore } from "./firebase.js";

/*
o---------o
| On Load |
o---------o
*/

let questionsData = await fetchData();
renderQuestionCards();

/*
o-----------o
| Firestore |
o-----------o
*/

async function fetchData() {
  const ref = firestore.doc(db, "qcollection", "zaizi");
  const snap = await firestore.getDoc(ref);
  const data = snap.data();

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

/*
o------------------o
| Render Questions |
o------------------o
*/

function renderQuestionCards() {
  questionsData.questions.forEach(({ question, author }) => {
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
