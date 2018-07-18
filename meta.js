const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports = {
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
  },
  // Patwak: Found this to be the options you can use... https://github.com/SBoudrias/Inquirer.js/#question
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'Making Waves FE build',
    },
    author: {
      type: 'string',
      message: 'Author',
      default: 'Making Waves'
    },
    vue:{
      type: 'confirm',
      message: 'Install Vue?'
    },
    vuex:{
      when:'vue',
      type:'confirm',
      message:'Install Vuex store?'
    },
    router: {
      when: 'vue',
      type: 'confirm',
      message: 'Install vue-router?',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    // unit: {
    //   type: 'confirm',
    //   message: 'Set up unit tests',
    // },
    // e2e: {
    //   type: 'confirm',
    //   message: 'Setup e2e tests with crossbrowsertesting.com?',
    // },
    autoInstall: {
      type: 'list',
      message:
        'Should we run `[yarn|npm] install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use Yarn (recommended if installed)',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    'Assets/Vue/**/*': 'vue',
    'Assets/Scripts/store.js': 'vuex',
    'Assets/Scripts/router.js': 'router',
    'Assets/Vue/Views/**/*': 'router',
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e'
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}