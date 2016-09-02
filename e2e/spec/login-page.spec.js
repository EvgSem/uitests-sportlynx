var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var logInPage = require('./login.page.js');  

module.exports = function () {
	this.Given(/^I navigate to login page$/, function (callback) {
    	browser.get(browser.baseUrl)
	    .then(callback);
	});

	this.When(/^I input '(.*)' to input-text email$/, function (value, callback) {
		var loginPageObj = new logInPage();
		var emailValue =  (value == 'default' ? browser.params.login.email : value);
		loginPageObj.emailInput.sendKeys(emailValue)
		.then(callback);
	});

	this.When(/^I input '(.*)' to input-text password$/, function (value, callback) {
		var loginPageObj = new logInPage();
		var passwordValue =  (value == 'default' ? browser.params.login.password : value);
		loginPageObj.passwordInput.sendKeys(passwordValue)
		.then(callback);
	});

	this.When(/^I click on button SingIn$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.singInButton.click()
		.then(callback);
	});

	this.Then(/^I should see paragraph '(.*)'$/, function (value, callback) {
		var loginPageObj = new logInPage();
		expect(loginPageObj.accessDeniedParagraph.getText()).to.eventually.equal(value)
	    .then(function(){
	    	callback();
	    });
	});
};