
class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.UN = page.locator("//input[@name='txtUserName']");
        this.PWD = page.locator("//input[@name='txtPassword']");
        this.SUB = page.locator("//input[@name='Submit']");
    }

    async loginapp()
    {
        await this.UN.fill("selenium");
        await this.PWD.fill("cypress");
        await this.SUB.click();

    }


}

module.exports = LoginPage;