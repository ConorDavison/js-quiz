var curPage = 0;
var myQuiz = [
    ["What is addEventListener() used for?", "attach a click event", "nothing", "to get a class", "listens to HTML", 1],
    ["What does DOM stand for?", "Document Object Model", "Document Over Model", "Do Over Model", "nothing", 1]
];

document.getElementById("btnNext").addEventListener("click", moveNext);
document.getElementById("btnPrevious").addEventListener("click", moveBack);

var myQuestion = document.getElementById("questions");
var myHeader = document.getElementById("quizHeader");
var className = document.getElementById("answer");
checkPage();
console.log(className);
for (var i = 0; i < className.length; i++) {
    className[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
    var idAnswer = this.getAttribute("data-id");
    document.getElementById('page1').innerHTML = 'Answer ' + idAnswer;
}

function moveNext() {
    curPage++;
    checkPage(curPage);
}

function checkPage(i) {
    console.log(curPage+1);
    myHeader.innerHTML = myQuiz[curPage][0];
    console.log(myQuestion);
}

function moveBack() {
    curPage--;
    checkPage(curPage);
}