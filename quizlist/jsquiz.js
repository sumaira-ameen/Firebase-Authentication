var questions = [
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans: "{}"
    },
    {
        question: " console.log(typeof null);?",
        opt1: "null",
        opt2: "number()",
        opt3: "object",
        opt4: "undefined",
        ans: "object"
    },
    {
        question: " Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans: "parseInt()"
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
    <h3 class="text-center text-body-secondary">JavaScript Quiz</h3>

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
            if (window.location.href.includes("jsquiz.html")) {
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