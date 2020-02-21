//import { Selector } from 'testcafe';
import TestPage1 from '../page-objects/pages/TestPage'

const tp=new TestPage1()
fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example`;

test('My test', async t => {
         tp.tpFunc()
         await t.wait(5000)
});