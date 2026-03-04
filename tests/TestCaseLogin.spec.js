import{test, expect} from '@playwright/test'
import LoginPage from '../OrangeHRMLoginPage/HomePage';

const p = require("../OrangeHRMLoginPage/HomePage");

test("Test Case 1 - Good", async({page})=>
{
    console.log("Test Case One Running");

})

test.skip("Test Case 2 - Skip", async({page})=>
{
    console.log("Test Case Two Skipped");

})

test("Test Case 3 - Good", async({page})=>
{
    console.log("Test Case Three Running");

})

test("Test Case 4 - Good", async({page})=>
{
    console.log("Test Case Four Running");

})

test.skip("Test Case 5 - Skip", async({page})=>
{
    console.log("Test Case Five Skipped");

})

test("Test Case 6 - Assertions", async({page})=>
{
    expect("Yes").toBe("No");
    console.log("Test Case Six Running");

})

test("Test Case 7 - Good", async({page})=>
{
    expect("Orange").toBe("Orange");
    console.log("Test Case Seven Running");

})
