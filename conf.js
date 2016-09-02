exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/*.feature' 
	],
  baseUrl: 'https://appdev1.sportlynx.com/clubadmin/login',
  params: {
    login: {
      email: 'rdeslonde@hotmail.com',
      password: 'password'
    }
  },
	capabilities: {
    'browserName': 'chrome'
  },
  cucumberOpts: {
    format: 'pretty',
    keepAlive: false,
    require: [
      'methods/*.steps.js',
      'features/env.js',
      'node_modules/cucumberjs-junitxml/reporter/reporter.js'
    ],
  },
}