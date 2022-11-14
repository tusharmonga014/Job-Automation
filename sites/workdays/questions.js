const credentials = require("../../credentials.json");

const questions = [
    {
        selector: '[data-automation-id="formField-sourcePrompt"]',
        answer: credentials.source,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type('#input-1', value);
            await page.keyboard.press('Enter');
        }
    },

    {
        selector: '[data-automation-id="previousWorker"]',
        answer: credentials.previouslyWorked,
        default: false,
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            const questionElement = await page.$(this.selector);
            const id_ = await questionElement.getProperty('id');
            const id = (await id_.jsonValue()).split(" ")[0];
            const selector = "#" + id + " .css-qy3315";
            const options = await page.$$(selector);

            if (value) {
                await options[0].click();
            } else {
                await options[1].click();
            }
        }
    },

    {
        selector: 'input[data-automation-id="legalNameSection_firstName"]',
        answer: credentials.firstName,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            const firstNameElement = await page.$(this.selector);
            await firstNameElement.type(value);
        }
    },

    {
        selector: 'input[data-automation-id="legalNameSection_lastName"]',
        answer: credentials.lastName,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            const lastNameElement = await page.$(this.selector);
            await lastNameElement.type(value);
        }
    }
];

module.exports = questions