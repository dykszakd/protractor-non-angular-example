var util = require('util');
describe("security", function () {
    describe('login', function () {

        var ptor = protractor.getInstance();
        var driver = ptor.driver;

        it('does beforeAll setup', function() {
            driver.get('http://google.com');
            var element = driver.findElement(protractor.By.css('#gbqfq'));
            element.sendKeys('test');
        });
    });
});