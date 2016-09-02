var LoginPage = function() {
  this.emailInput = element(by.model('vm.email')),
  this.passwordInput = element(by.model('vm.password')),
  this.singInButton = element(by.css('[ng-click="vm.login()"]'))
}

module.exports = LoginPage;