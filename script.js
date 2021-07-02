const quizData = [
    {
        question: 'What year was HTML launched?',
        a: '1999',
        b: '1997',
        c: '1993',
        d: '1990',
        correct: 'c'
    }, {
        question: 'What is the most used programing language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the best guy in the world?',
        a: 'Faris',
        b: 'Faris Ahmed',
        c: 'Faris Marhoon',
        d: '9FA',
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheets',
        c: 'Jason Object Notation',
        d: 'Faris Is The Best',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    },
];


const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const  a_text = document.getElementById('a_text');
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deslectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected( ){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deslectAnswers( ) {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    const answer = getSelected();

    if (answer){
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
            currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = '<h2>You answered correctly at ' + score + '/' + quizData.length + ' question.</h2> <button onClick="location.reload()">Reload</button>';
              }
        }

});
