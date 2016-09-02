var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var logInPage = require('./login.page.js');  
var homePage = require('./home.page.js');  

module.exports = function () {
	this.Given(/^I navigate to homepage$/, function (callback) {
	    browser.get(browser.baseUrl)
	    .then(callback);
	});

	this.When(/^I input email to input-text email$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.emailInput.sendKeys(browser.params.login.email)
		.then(callback);
	});

	this.When(/^I input password to input-text password$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.passwordInput.sendKeys("password")
		.then(callback);
	});

	this.When(/^I click on button SingIn$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.singInButton.click()
		.then(callback);
	});

	this.Then(/^I should see welcome title$/, function (callback) {
		var homePageObj = new homePage();
		expect(homePageObj.welcomeTitle.getText()).to.eventually.equal('Welcome to SportLynx!')
	    .then(function(){
	    	callback();
	    });
	});
};