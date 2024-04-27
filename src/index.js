const questions = document.querySelectorAll('.top');

Array.from(questions).map((question) => {
  question.addEventListener("click", () => {
    let minus = question.lastElementChild.lastElementChild;
    let plus = question.lastElementChild.firstElementChild;
    
    // reset answers
    Array.from(questions).map((q) => {
      if (q !== question) {
        q.lastElementChild.firstElementChild.classList.add('active');
        q.lastElementChild.lastElementChild.classList.remove('active');
        q.nextElementSibling.firstElementChild.style.maxHeight = null;
        q.style.marginBottom = '0';
      }
    })

    let answer = question.nextElementSibling.firstElementChild;

    if (answer.style.maxHeight) {         // is open
      answer.style.maxHeight = null;
      question.style.marginBottom = '0';
      plus.classList.add('active');
      minus.classList.remove('active');
    } else {                              // is closed
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.style.marginBottom = '1.5rem';
      plus.classList.remove('active');
      minus.classList.add('active');
    }
  });
})