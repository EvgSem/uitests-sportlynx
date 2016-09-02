exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'e2e/features/*.feature' 
	],
  baseUrl: 'https://appdev1.sportlynx.com/clubadmin/login',
  params: {
    login: {
      email: 'rdeslonde@hotmail.com',
      password: 'password'
    }
  },
	capabilities: {
    'browserName': 'chrome',
    'chromeOptions' : {
       args: ['--lang=en',
              '--window-size=1920,1080',
              'incognito']
    },
  },
  cucumberOpts: {
    format: 'pretty',
    keepAlive: false,
    require: [
      'e2e/spec/*.spec.js',
      'e2e/features/env.js',
      'node_modules/cucumberjs-junitxml/reporter/reporter.js'
    ],
  },
}