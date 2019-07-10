# US FE template

## While developing the actual template;
Clone this repo. To build the example template, do:
```bash
$ npm run build
```

This will build the template into sub folder `test-template`, just like if you were an end user of the template system.

Do your changes in this folder to test, and then move the configuration back into the template folder. Don't forget to add questions etc to meta.js when needed, and conditionals in all files if it should be installed or not depending on user choice.

Other scripts you can use in packages.json include;
- npm run clean - to remove the test-template directory
- npm run rebuild - to clean and then build the template, starting you from scratch again.

Do **NOT** do any `npm install`s in either the root, nor template. Only in the `test-template` directory!

## Vue-CLI template for Chicago Office FE.

Do not clone this repo, it's just the template. To actually install a new site, use:

```bash
$ npm install -g @vue/cli @vue/cli-init
$ vue init wazp/fe-template <path to web root>
$ cd <path to web root>
$ npm install
```
Include all generated files into the solution, except the files under `/Assets/bundled`.


TODOS:
- Update grid.less to use flexbox
- Add stylesheet for styleguide
  - Outline Grid in the styleguide so client can see the invisible grid cells
- [x] Make linting work good in VS
  - Needs extension, VisualLinter (https://marketplace.visualstudio.com/items?itemName=JeanAlexanderWoldner.VisualLinter)
- [ ] Implement new questions based on configurations, ie Vue yes/no, Unit tests yes/no etc etc.
- [x] Setup webpack configuration
  - [ ] Upgrade webpack to version 4
- [ ] Find alternative to jQuery Validator working with plain js
- [ ] Setup E2E tests with CrossBrowserTesting.com - Patrick
- [ ] Create Readme Markdown files with examples of various things we use.
- [ ] Nice to have: Add build question "Use CSS Grid? (Default: No) Reccommended for sites supporting evergreen only.", if so, swap out the _grid.less file with a CSS Grid version.
