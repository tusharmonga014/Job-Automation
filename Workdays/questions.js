const questions = [
    {
        dataAutomationId: "formField-sourcePrompt",
        answer: "source",
        fillValue: async function (page, credentials) {
            await page.waitForSelector('#input-1', { visible: true, timeout: 100000 });
            await page.type('#input-1', credentials.source);
            await page.keyboard.press('Enter');
        }
    },

    {
        dataAutomationId: "previousWorker",
        answer: "previouslyWorked",
        fillValue: async function (page, credentials) {
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
        fillValue: async function (page, credentials) {
            const firstNameElement = await page.$('input[data-automation-id="legalNameSection_firstName"]');
            await firstNameElement.type(credentials.firstName);
        }
    },

    {
        dataAutomationId: "legalNameSection_lastName",
        answer: "lastName",
        fillValue: async function (page, credentials) {
            const firstNameElement = await page.$('input[data-automation-id="legalNameSection_lastName"]');
            await firstNameElement.type(credentials.lastName);
        }
    }
];

module.exports = questions