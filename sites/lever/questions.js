const credentials = require("../../credentials.json");
const path = require("path");

const questions = [
    {
        selector: 'input[name="resume"]',
        answer: "../../resume.pdf",
        default: "",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            // const filePath = path.relative(process.cwd(), __dirname + value);
            // const fileUploadElement = await page.$(this.selector);
            // await fileUploadElement.uploadFile(filePath);

            // const [fileChooser] = await Promise.all([
            //     page.waitForFileChooser(),
            //     page.click("input[name='resume']"),
            // ]);
            // await fileChooser.accept(['./resume.pdf']);
        }
    },

    {
        selector: 'input[name="name"]',
        answer: credentials.firstName + " " + credentials.lastName,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="email"]',
        answer: credentials.email,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="phone"]',
        answer: credentials.phoneNumber,
        default: "0000000000",
        fillIfNotRequired: false,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="org"]',
        answer: credentials.currentCompany,
        default: "NA",
        fillIfNotRequired: false,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="urls[LinkedIn]"]',
        answer: credentials.urls.linkedIn,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="urls[GitHub]"], input[name="urls[Github]"]',
        answer: credentials.urls.github,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="urls[Twitter]"], input[name="urls[twitter]"]',
        answer: credentials.urls.twitter,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="urls[Other]"]',
        answer: credentials.urls.leetcode,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'textarea[name="cards[31640a4b-91ea-4037-82b0-ceff034b9d39][field0]"], textarea[name="comments"], #additional-information',
        answer: credentials.aboutYourself,
        default: "NA",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="cards[0d68b70b-bc08-4129-9b6a-ec302aa785ec][field0]"]',
        answer: credentials.experienceInYears,
        default: "0",
        fillIfNotRequired: false,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="cards[0d68b70b-bc08-4129-9b6a-ec302aa785ec][field2]',
        answer: credentials.expectedCTC,
        default: "300000",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="cards[0d68b70b-bc08-4129-9b6a-ec302aa785ec][field3]',
        answer: credentials.noticePeriod,
        default: "NA",
        fillIfNotRequired: false,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="cards[0d68b70b-bc08-4129-9b6a-ec302aa785ec][field4]',
        answer: credentials.currentLocation,
        default: "India",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    },

    {
        selector: 'input[name="cards[0d68b70b-bc08-4129-9b6a-ec302aa785ec][field5]',
        answer: credentials.hometown,
        default: "India",
        fillIfNotRequired: true,
        fillValue: async function (page, value) {
            await page.type(this.selector, value);
        }
    }
];

module.exports = questions