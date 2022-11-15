const credentials = require("../../credentials.json");

const pages = [
    {
        saveAndContinueBtn: 'button[data-automation-id="bottom-navigation-next-button"]',
        questions: [
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
                    const selector = "#" + id + ` input[id="${value ? 1 : 2}"]`;

                    await page.waitForSelector(selector, { visible: true, timeout: 100000 });
                    const option = await page.$(selector);
                    await page.waitForTimeout(1000);

                    await option.click();
                    await option.click();
                }
            },

            {
                selector: 'input[data-automation-id="legalNameSection_firstName"]',
                answer: credentials.firstName,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="legalNameSection_lastName"]',
                answer: credentials.lastName,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="addressSection_addressLine1"]',
                answer: credentials.address.residence,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="addressSection_city"]',
                answer: credentials.address.city,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="addressSection_postalCode"]',
                answer: credentials.address.pincode,
                default: "000000",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="phone-number"]',
                answer: credentials.phoneNumber,
                default: "",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            }
        ]
    },

    {
        saveAndContinueBtn: 'button[data-automation-id="bottom-navigation-next-button"]',
        questions: [
            {
                selector: 'input[data-automation-id="jobTitle"]',
                answer: credentials.experiences[0].jobTitle,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="company"]',
                answer: credentials.experiences[0].companyName,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'input[data-automation-id="location"]',
                answer: credentials.experiences[0].location,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },


            {
                selector: 'input[data-automation-id="dateSectionMonth-input"]',
                answer: credentials.experiences[0].startDate.month,
                default: "00",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            },

            {
                selector: 'textarea[data-automation-id="description"]',
                answer: credentials.experiences[0].description,
                default: "NA",
                fillIfNotRequired: true,
                fillValue: async function (page, value) {
                    await page.type(this.selector, value);
                }
            }
        ]

    }
];

module.exports = pages