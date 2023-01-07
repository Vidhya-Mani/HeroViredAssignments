let questNo = 0;
let score = 0;

const a_value = document.getElementById("a_opt");
const b_value = document.getElementById("b_opt");
const c_value = document.getElementById("c_opt");
const d_value = document.getElementById("d_opt");
const submit1 = document.querySelector("button");
const quizel = document.querySelector("div");
const qel = document.querySelector("h1");
const allans = document.querySelectorAll('.answer');


const quizArr =[
    {
        q: "Who is Ponniyin Selvan?",
        option1: "Aditya Karikalan",
        option2: "Parthiban",
        option3: "Raja Raja Cholan",
        option4: "Vanthiya Devan",
        answers: "c"
    },
    {
        q: "Who killed Baahubali?",
        option1: "Kattappa",
        option2: "Rajamatha",
        option3: "Balval Devan",
        option4: "Kaalakeya",
        answers: "a"

    },
    {
        q: "Which movie is based on Kolar Gold Mines?",
        option1: "Pettai",
        option2: "Big Brother",
        option3: "Dhrishyam",
        option4: "KGF",
        answers: "d"
    },
    {
        q: "Who is the male lead in movie Pushpa?",
        option1: "Prabhas",
        option2: "Allu Arjun",
        option3: "Junior NTR",
        option4: "Ram Charan",
        answers: "b"
    },
    {
        q: "What is the native language of movie Kantara?",
        option1: "Tamil",
        option2: "Kannada",
        option3: "Malayalam",
        option4: "Telugu",
        answers: "b"
    }
];

function removeAnswers(){
    allans.forEach(ans => {ans.checked=false})
}

function callingQuiz(){
    removeAnswers()

    const quizNo = quizArr[questNo]

    qel.innerText = quizNo.q
    a_value.innerText = quizNo.option1
    b_value.innerText = quizNo.option2
    c_value.innerText = quizNo.option3
    d_value.innerText = quizNo.option4

}


callingQuiz()

function selectedKey(){
    let selected
    allans.forEach(ans => {
        if(ans.checked){
            selected =  ans.id
        }
    })
    return selected
    
}

submit1.addEventListener('click',check)

function check(){
    const selected = selectedKey()
    if(selected){
        if(selected === quizArr[questNo].answers){
            score++
        }

        questNo++

        if(questNo < quizArr.length){
            callingQuiz()

        }
        else{
            quizel.innerHTML = `
            <h3> You answered ${score}/${quizArr.length} questions correctly</h3>

            <button onclick="location.reload()"> Reload</button>
            `
        }


}
}
