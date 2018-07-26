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
      message: 'Install Vue-router?',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    unit: {
      type: 'confirm',
      message: 'Set up unit tests with Jest?',
    },
    styleguide: {
      type: 'confirm',
      message: 'Install Styleguide?'
    },
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
    'Assets/Scripts/store.js': 'vue && vuex',
    'Assets/Scripts/router.js': 'vue && router',
    'Assets/Vue/Views/**/*': 'vue && router', // install "Views" if we have Vue-router
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'test/unit/**/*': 'unit', // jest config and example spec
    'Assets/Scripts/custom/utils.js': 'unit', // jest example js file to test against
    'Assets/**/*.test.js': 'unit', // only copy tests if unit is true
    'test/e2e/**/*': 'e2e',
    'stylemark.yml': 'styleguide', //styleguide config file
    'Assets/Scripts/custom/toggle.js': 'styleguide', //styleguide sample js file
    'Assets/Vue/**/*.md': 'styleguide && vue' //styleguide md docs for vue components
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