const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What Is 2+2?',
        choice: '2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer: 2,
    },

    {
        question: 'The Tallest Building In The World Is Located In Which City?',
        choice1: 'Dubai',
        choice2:'New York',
        choice3:'Shanghai',
        choice4:'None Of The Above',
        answer: 1,
    },

    {
        question: 'Who Is Better At Coding?',
        choice1: 'Steve Jobs ',
        choice2:'Mark Zuckerberg ',
        choice3:'Faris',
        choice4:'Linus Torvalds',
        answer: 3,
    },

    {
        question: 'What Is 4+4?',
        choice1: '8',
        choice2:'4',
        choice3:'1',
        choice4:'9',
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter =0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) *100}%'
   
    const questionIndex = Math.floor(Math.random() * availableQuestions,length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataSet['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswer =true 
}

choices.forEach(choice => {
    choice.addEventListener('click',e =>{
        if(!acceptingAnswer) return

        acceptingAnswer = false
        const  selectedChoice = e.target
        const  selectedAnswer = selectedChoice.dataSet['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classToApply.remove(classToApply)
            getNewQuestion()
        },1000)
    })
})

incrementScore = num =>{
    score +=num 
    scoreText.innerText = score
}

startGame