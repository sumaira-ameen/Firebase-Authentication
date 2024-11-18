const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");

html.addEventListener("click", () => {
    if (window.location.href.includes("select.html")){
        window.location.href = "quizlist/htmlquiz.html"
    }
});

css.addEventListener("click", () => {
    if (window.location.href.includes("select.html")){
        window.location.href = "quizlist/cssquiz.html"
    }
});

js.addEventListener("click", () => {
    if (window.location.href.includes("select.html")){
        window.location.href = "quizlist/jsquiz.html"
    }
});