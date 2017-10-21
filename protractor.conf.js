const crew = require('serenity-js/lib/stage_crew')

exports.config = {
  // Framework definition - tells Protractor to use Serenity/JS
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
  },

  stageCueTimeout: 30 * 1000
}
