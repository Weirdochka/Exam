function testCount( ) {
    const
        test = document.querySelector(".test"),
        questionsCount = test.querySelectorAll("ul").length - 1,
        checked = test.querySelectorAll("input:checked"),
        checkedCount = checked.length,
        right = test.querySelectorAll("li.right input:checked"),
        rightCount = right.length
    ; 
    alert( `Вопросов в тесте: ${questionsCount}
Вопросов без ответа: ${questionsCount + 4 - checkedCount}, ${100 - (checkedCount / (questionsCount + 4) * 100).toFixed(0)}%
Верных ответов: ${rightCount}, ${(rightCount / (questionsCount + 4) * 100).toFixed(0)}%
`)
}