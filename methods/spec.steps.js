var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

module.exports = function () {
	this.Given(/^User can log in$/, function (callback) {
	    browser.get('https://appdev1.sportlynx.com/login');
	    element(by.model('vm.email')).sendKeys("rdeslonde@hotmail.com");
	    element(by.model('vm.password')).sendKeys("password");
	    element(by.css('[ng-click="vm.login()"]')).click();
	    expect(element(by.xpath('//h2')).getText()).to.eventually.equal('Welcome to SportLynx!')
	    .then(function(){
	    	callback();
	    });
	});
};