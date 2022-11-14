let puppeteer = require("puppeteer");
let questions = require("./questions");
const { fillValue } = require("../utility");

const url_ = "https://jobs.lever.co/paytm/30bd4826-358c-41b4-8ec4-394d704279d9";

async function fn() {
    // browser instance
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    });

    let url = process.argv.slice(2);
    let pagesArr = await browser.pages();
    let page = pagesArr[0];
    // await page.goto(url[0]);
    await page.goto(url_);

    await page.waitForSelector(".postings-btn.template-btn-submit.cerulean", { visible: true, timeout: 100000 });
    await page.click(".postings-btn.template-btn-submit.cerulean");

    await page.waitForSelector(questions[0].selector, { visible: true, timeout: 100000 });
    for (let questionIndex in questions) {
        const question = questions[questionIndex];
        const questionElement = await page.$(question.selector);
        if (questionElement) {
            await fillValue(page, question);
        }
    }
}
fn();