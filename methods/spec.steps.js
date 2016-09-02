var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var logInPage = require('./login.page.js');  
var homePage = require('./home.page.js');  

module.exports = function () {
	this.Given(/^I navigate to homepage$/, function (callback) {
	    browser.get(browser.baseUrl)
	    .then(function(){
    		callback();
	    })
	});

	this.When(/^I input email to input-text email$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.loginInput.sendKeys("rdeslonde@hotmail.com")
		.then(function(){
	    	callback();
	    });
	});

	this.When(/^I input password to input-text password$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.passwortInput.sendKeys("password")
		.then(function(){
	    	callback();
	    });
	});

	this.When(/^I click on button SingIn$/, function (callback) {
		var loginPageObj = new logInPage();
		loginPageObj.singInButton.click()
		.then(function(){
	    	callback();
	    });
	});

	this.Then(/^I should see welcome title$/, function (callback) {
		var homePageObj = new homePage();
		expect(homePageObj.welcomeTitle.getText()).to.eventually.equal('Welcome to SportLynx!')
	    .then(function(){
	    	callback();
	    });
	});
};