var LoginPage = function() {
  this.loginInput = element(by.model('vm.email')),
  this.passwortInput = element(by.model('vm.password')),
  this.singInButton = element(by.css('[ng-click="vm.login()"]'))
}

module.exports = LoginPage;