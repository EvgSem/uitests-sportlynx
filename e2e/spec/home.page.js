var HomePage = function() {
  this.welcomeTitle = element(by.xpath('//h2')),
  this.manageAccountMenuItem = element(by.css('a[title="Manage your account"]')),
  this.logOutMenuItem = element(by.css('[ng-click="vm.logout()"]'))
}

module.exports = HomePage;