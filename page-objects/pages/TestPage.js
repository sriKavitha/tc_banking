import { Selector, t } from 'testcafe'
class TestPage1
{
    constructor()
    {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }
    async tpFunc()
    {
         await  t.typeText(this.nameInput, 'Peter Parker') // Waits for `#developer-name`
                .wait(2000)
                 .click(this.submitButton);                // Waits for '#submit-button'
    }
}
export default TestPage1