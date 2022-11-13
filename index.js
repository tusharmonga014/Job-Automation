let puppeteer = require("puppeteer");
let credentials = require("./credentials.json");

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
    await page.goto(credentials.url_);

    await page.waitForSelector(".css-b3pn3b .css-16xevfn", { visible: true, timeout: 100000 });
    await page.click(".css-b3pn3b .css-16xevfn");

    let applyButtons = await page.$$(".css-w08rvl");
    let applyManuallyBtn = applyButtons[0];
    await applyManuallyBtn.click();

    await page.waitForSelector("#input-4", { visible: true, timeout: 100000 });
    await page.type("#input-4", credentials.email);
    await page.type("#input-5", credentials.password);

    await page.waitForSelector(".css-1t71xfh", { visible: true, timeout: 100000 });
    await page.click(".css-1t71xfh");

    await page.waitForSelector("#input-1", { visible: true, timeout: 100000 });
    await page.type("#input-1", credentials.source);
    await page.keyboard.press("Enter");

    const element = await page.$('[data-automation-id="previousWorker"]');
    const class_ = await element.getProperty('className');
    const className = (await class_.jsonValue()).split(" ")[0];
    console.log(className);
}
fn();


