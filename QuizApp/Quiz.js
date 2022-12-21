const quizApp =[
    {
        q: "Who is Ponniyin Selvan?",
        a: "Aditya Karikalan",
        b: "Parthiban",
        c: "Raja Raja Cholan",
        d: "Vanthiya Devan",
        ans: "c"
    },
    {
        q: "Who killed Baahubali?",
        a: "Kattappa",
        b: "Rajamatha",
        c: "Bella Deva",
        d: "Kaalakeya",
        ans: "a"
    },
    {
        q: "Which movie is based on Kolar Gold Mines?",
        a: "Pettai",
        b: "Big Brother",
        c: "Dhrishyam",
        d: "KGF",
        ans: "d"
    },
    {
        q: "Who is the male lead in movie Pushpa?",
        a: "Prabhas",
        b: "Allu Arjun",
        c: "Junior NTR",
        d: "Ram Charan",
        ans: "b"
    },
    {
        q: "What is the native language of movie Kantara?",
        a: "Tamil",
        b: "Kannada",
        c: "Malayalam",
        d: "Telugu",
        ans: "b"
    }
];


const quizel = document.getElementById("quiz");
const qel = document.getElementById("quest");
const aels = document.querySelectorAll('.answer');
const a_text = document.getElementById("a_opt");
const b_text = document.getElementById("b_opt");
const c_text = document.getElementById("c_opt");
const d_text = document.getElementById("d_opt");
const sbtBtn = document.getElementById("submit");


let quizValue = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const quizNo = quizApp[quizValue]

    qel.innerText = quizNo.q
    a_text.innerText = quizNo.a
    b_text.innerText = quizNo.b
    c_text.innerText = quizNo.c
    d_text.innerText = quizNo.d


}

function deselectAnswers(){
    aels.forEach(ael => ael.checked = false);
    // for(i=0;i<ael;i++){
    //     ael.checked = false
    // }
}

function selectedKey(){
    let selected
    aels.forEach(ael => {
        if(ael.checked){
            selected =  ael.id
        }
    })

    // for(j=0; j<aels;j++){
    //     if(aels.checked){
    //        selected = aels.id
    //     }
    // }
    return selected
    
}

sbtBtn.addEventListener('click',() => {
    const selected = selectedKey()
    if(selected){
        if(selected === quizApp[quizValue].ans){
            score++
        }

        quizValue++

        if(quizValue < quizApp.length){
            loadQuiz()

        }else{
            quizel.innerHTML = `
            <h2> You answered ${score}/${quizApp.length} questions correctly</h2>

            <button onclick="location.reload()"> Reload</button>
            `
        }
    }


})