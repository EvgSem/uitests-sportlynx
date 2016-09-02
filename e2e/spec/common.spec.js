module.exports = function () {
  this.Given(/^I clear all cookies/, function (callback) {
	browser.driver.manage().deleteAllCookies().then(callback);
  });
};