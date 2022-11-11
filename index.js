let puppeteer = require("puppeteer");
let { email, password, url_ } = require("./credentials.json");

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

    await page.waitForSelector(".css-b3pn3b .css-16xevfn", { visible: true, timeout: 100000 });
    await page.click(".css-b3pn3b .css-16xevfn");

    let applyButtons = await page.$$(".css-w08rvl");
    let applyManuallyBtn = applyButtons[0];
    await applyManuallyBtn.click();

    await page.waitForSelector("#input-4", { visible: true, timeout: 100000 });
    await page.type("#input-4", email);
    await page.type("#input-5", password);

    await page.click(".css-jimc6x");
}
fn();


