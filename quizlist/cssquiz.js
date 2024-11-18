var questions = [
    {
        question: "What does CSS stand for?",
        opt1: "Computer Style Sheets",
        opt2: "Cascading Style Sheets",
        opt3: "Creative Style Sheets",
        opt4: "Colorful Style Sheets",
        ans: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the text color of an element?",
        opt1: "text-color",
        opt2: "color",
        opt3: "font-color",
        opt4: "text-style",
        ans: "color"
    },
    {
        question: " How do you select an element with the id header?",
        opt1: ".header",
        opt2: "#header",
        opt3: "*header",
        opt4: "header",
        ans: "#header"
    },
    {
        question: "What is the correct syntax to apply a background color in CSS?",
        opt1: "background-color: red;",
        opt2: "bg-color: red;",
        opt3: "color-background: red;",
        opt4: "background: red;",
        ans: "background-color: red;"
    }
]
var index = 0;
var result = 0

function renderQues() {
    var container = document.getElementById("container");
    var option = document.getElementsByName("option");
    for (var i = 0; i < option.length; i++) {

        if (option[i].checked) {
            if (questions[index - 1].ans === option[i].value) {
                result++
            }
            console.log(option[i].value, questions[index - 1].ans, result);
        }
    }
    if (!questions[index]) {
        calculateResult()
        var resultContainer = document.getElementById("result-container");
        resultContainer.style.display = "block";
        container.style.display = "none";

        console.log("Result: " + result);
        return;
    }
    container.innerHTML = `
    <h3 class="text-center text-body-secondary">CSS Quiz</h3>

     <p class="question">${index + 1}
     ${questions[index].question}</p><hr/>
        <div class="options"> <label for="opt1"><input type="radio" name="option" id="opt1" value="${questions[index].opt1}"> 
        ${questions[index].opt1}</label></div>
        <div class="options"> <label for="opt2"><input type="radio" name="option" id="opt2" value="${questions[index].opt2}">
        ${questions[index].opt2}</label></div>
        <div class="options"> <label for="opt3"><input type="radio" name="option" id="opt3" value="${questions[index].opt3}">
        ${questions[index].opt3}</label></div>
        <div class="options"> <label for="opt4"><input type="radio" name="option" id="opt4" value="${questions[index].opt4}">
        ${questions[index].opt4}</label></div>
        <button id="prev" class="m-2 btn btn-primary" onclick="previousQuestion()">Previous</button>
        <button id="next" class="m-2 btn btn-success" onclick="nextQuestion()">Next</button> `
    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    function calculateResult() {
        var score = document.getElementById("score");
        var percentage = ((result / questions.length) * 100).toFixed(2)

        let home = document.getElementById("home");

        home.addEventListener("click", () => {
            if (window.location.href.includes("cssquiz.html")) {
                window.location.href = "../select.html"
            }
        })
        
        if (percentage > 70) {
            score.innerHTML = "Congratulations! You passed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
        } else {
            score.innerHTML = "Sorry! You failed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
            score.style.color = "#dc3545";
        }
    }
    prevButton.disabled = (index == 0);
    if (index == questions.length - 1) {
        nextButton.innerHTML = "Submit";
        nextButton.classList.add("btn-danger")
        nextButton
        console.log(questions.length);
    }
}
renderQues()
function nextQuestion() {
    index++;
    renderQues();
}
function previousQuestion() {
    if (index > 0) {
        index--;
        renderQues();
    }
}