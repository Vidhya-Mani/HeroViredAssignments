const quizArr =[
    {
        q: "Who is Ponniyin Selvan?",
        a: "Aditya Karikalan",
        b: "Parthiban",
        c: "Raja Raja Cholan",
        d: "Vanthiya Devan",
        correct: "c"
    },
    {
        q: "Who killed Baahubali?",
        a: "Kattappa",
        b: "Rajamatha",
        c: "Balval Devan",
        d: "Kaalakeya",
        correct: "a"
    },
    {
        q: "Which movie is based on Kolar Gold Mines?",
        a: "Pettai",
        b: "Big Brother",
        c: "Dhrishyam",
        d: "KGF",
        correct: "d"
    },
    {
        q: "Who is the male lead in movie Pushpa?",
        a: "Prabhas",
        b: "Allu Arjun",
        c: "Junior NTR",
        d: "Ram Charan",
        correct: "b"
    },
    {
        q: "What is the native language of movie Kantara?",
        a: "Tamil",
        b: "Kannada",
        c: "Malayalam",
        d: "Telugu",
        correct: "b"
    }
];


let questNo = 0;
let score = 0;

const quizel = document.querySelector("div");
const qel = document.querySelector("h1");
const allans = document.querySelectorAll('.answer');
const a_text = document.getElementById("a_opt");
const b_text = document.getElementById("b_opt");
const c_text = document.getElementById("c_opt");
const d_text = document.getElementById("d_opt");
const sbtBtn = document.querySelector("button");


loadQuiz()

function loadQuiz(){
    removeAnswers()

    const quizNo = quizArr[questNo]

    qel.innerText = quizNo.q
    a_text.innerText = quizNo.a
    b_text.innerText = quizNo.b
    c_text.innerText = quizNo.c
    d_text.innerText = quizNo.d

}

function removeAnswers(){
    allans.forEach(ael => {ael.checked=false})
}


sbtBtn.addEventListener('click',check)

function selectedKey(){
    let selected
    allans.forEach(ael => {
        if(ael.checked){
            selected =  ael.id
        }
    })
    return selected
    
}

function check(){
    const selected = selectedKey()
    if(selected){
        if(selected === quizArr[questNo].correct){
            score++
        }

        questNo++

        if(questNo < quizArr.length){
            loadQuiz()

        }else{
            quizel.innerHTML = `
            <h3> You answered ${score}/${quizArr.length} questions correctly</h3>

            <button onclick="location.reload()"> Reload</button>
            `
        }


}
}
