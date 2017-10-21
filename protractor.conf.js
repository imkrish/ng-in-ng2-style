const crew         = require('serenity-js/lib/stage_crew')
const glob         = require('glob')
const protractor   = require.resolve('protractor')
const node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length)
const seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop()

exports.config = {
  baseUrl: 'http://todomvc.com',
  seleniumServerJar: seleniumJar,
  allScriptsTimeout: 110000,
  disableChecks: true,
  ignoreUncaughtExceptions: true,

  framework: 'custom',
  frameworkPath: require.resolve('serenity-js'),
  specs: ['features/**/*.feature'],

  cucumberOpts: {
    require:    [ 'features/**/*.ts' ],
    format:     'pretty',
    compiler:   'ts:ts-node/register'
  },

  serenity: {
    crew:    [
      crew.serenityBDDReporter(),
      crew.photographer(),
      crew.consoleReporter(),
    ],
    dialect: 'cucumber',
    stageCueTimeout: 30 * 1000
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: [
            'disable-infobars'
        ]
    }
}

}
