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

module.exports = {
    fillValue
}