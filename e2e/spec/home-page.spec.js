var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var homePage = require('./home.page.js');  

module.exports = function () {
	this.Then(/^I should see welcome title '(.*)'$/, function (value, callback) {
		var homePageObj = new homePage();
		expect(homePageObj.welcomeTitle.getText()).to.eventually.equal(value)
	    .then(function(){
	    	callback();
	    });
	});

	this.When(/^I click on menu item Manage your account$/, function (callback) {
		var homePageObj = new homePage();
		homePageObj.manageAccountMenuItem.click()
		.then(callback);
	});

	this.When(/^I click on menu item Log out$/, function (callback) {
		var homePageObj = new homePage();
		homePageObj.logOutMenuItem.click()
		.then(callback);
	});


};