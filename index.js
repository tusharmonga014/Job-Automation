let puppeteer = require("puppeteer");
let { email, pwd ,url_} = require("./credentials.json");

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
    // console.log(url_);
    page.waitForNavigation();
    // await page.click(".css-b3pn3b .css-16xevfn");

}
fn();


