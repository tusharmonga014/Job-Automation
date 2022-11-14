const credentials = require("../../credentials.json");

const questions = [
    {
        selector: '[data-automation-id="formField-sourcePrompt"]',
        answer: credentials.source,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type('#input-1', credentials.source);
            await page.keyboard.press('Enter');
        }
    },

    {
        dataAutomationId: "previousWorker",
        answer: credentials.previouslyWorked,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            const questionElement = await page.$('[data-automation-id="previousWorker"]');
            const id_ = await questionElement.getProperty('id');
            const id = (await id_.jsonValue()).split(" ")[0];
            const selector = "#" + id + " .css-qy3315";
            const options = await page.$$(selector);

            if (credentials.previouslyWorked) {
                await options[0].click();
            } else {
                await options[1].click();
            }

        }
    },

    {
        dataAutomationId: "legalNameSection_firstName",
        answer: "firstName",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            const firstNameElement = await page.$('input[data-automation-id="legalNameSection_firstName"]');
            await firstNameElement.type(credentials.firstName);
        }
    },

    {
        dataAutomationId: "legalNameSection_lastName",
        answer: "lastName",
        fillIfNotRequired: true,
        fillValue: async function (page, vlaue) {
            const firstNameElement = await page.$('input[data-automation-id="legalNameSection_lastName"]');
            await firstNameElement.type(credentials.lastName);
        }
    }
];

module.exports = questions