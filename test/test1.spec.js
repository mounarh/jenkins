
const  assert  =  require("assert");
const app = require('../app');

describe('Application:', ()  =>  {
    it(`Test unitaire 1`, ()  =>  {
        assert.equal("mouna rhanem", app.test("mouna", "rhanem"),  'Application TEST');
    });
}); 