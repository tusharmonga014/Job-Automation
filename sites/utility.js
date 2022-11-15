async function fillValue(page, question) {
    const questionElement = await page.$(question.selector);
    const isRequiredJSHandle = await questionElement.getProperty("required");
    const isRequired = await isRequiredJSHandle.jsonValue();

    if (!isRequired && !question.fillIfNotRequired)
        return;

    let value = question.answer;
    if (!value)
        value = question.default;

    await question.fillValue(page, value);
}

async function fillPageQuestions(page, firstSelector, saveBtnSelector, questions) {
    await page.waitForSelector(firstSelector, { visible: true, timeout: 100000 });

    for (let questionIndex in questions) {
        const question = questions[questionIndex];
        const questionElement = await page.$(question.selector);
        if (questionElement) {
            await fillValue(page, question);
        }
    }

    await page.click(saveBtnSelector);
}

module.exports = {
    fillPageQuestions
}