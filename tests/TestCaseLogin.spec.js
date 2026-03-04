import{test, expect} from '@playwright/test'
import LoginPage from '../OrangeHRMLoginPage/HomePage';

const p = require("../OrangeHRMLoginPage/HomePage");

test("Check the title after login", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    const L = new LoginPage(page);

    await  L.loginapp();

    await page.waitForTimeout(4000);



})