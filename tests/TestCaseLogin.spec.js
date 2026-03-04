import{test, expect} from '@playwright/test'
import LoginPage from '../OrangeHRMLoginPage/HomePage';

const p = require("../OrangeHRMLoginPage/HomePage");

test("Test Case 1 - Good", async({page})=>
{
    await page.goto("https://www.amazon.in/");
    console.log("Test Case One Amazon");

})

test("Test Case 2 - Good", async({page})=>
{
    await page.goto("https://www.ebay.com/");
    console.log("Test Case Two Ebay");

})
