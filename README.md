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

TODOS:
- [x] Make linting work good in VS
  - Needs extension, VisualLinter (https://marketplace.visualstudio.com/items?itemName=JeanAlexanderWoldner.VisualLinter)
- [x] Decide on Less/cssnext based on VS compatibility - FIXED - we will go with LESS.
- [x] Folder structure to follow our basic project structure
  - All config files in *.Web
  - All assets under *.Web/Assets/
  - All compiled files into */bundled/
- [x] Setup linting with a modified StandardJS
- [x] Take Grid we already have in stuff like AE
  - [x] Write documentation about the grid, and show all utilities and how to use the grid system.
- [ ] Implement new questions based on configurations, ie Vue yes/no, Unit tests yes/no etc etc.
- [x] Setup webpack configuration
  - [ ] Upgrade webpack to version 4
- [x] Find good living styleguide for webpack implementations
  - [x] [Stylemark](https://github.com/nextbigsoundinc/stylemark) - Branch: styleguide-stylemark | Review - Best one so far, we just need to see if it can include vue components.
    - [x] Test including vue components
  - [x] [SC5](https://github.com/SC5/sc5-styleguide) - Branch: styleguide | Review - Has too many errors when using basic less functions.
  - [x] [DevBridge](https://github.com/devbridge/Styleguide) - Branch: styleguide-devbridge | Review - Not robust enough for us, only generates stuff thats in variables. Rest of styles and markup have to be inputted manually, and not inside our source code.
- [x] Cleanup CSS
  - [x] Eliminate some styles since this was copied from another site.
  - [x] Add any base styles that we would like to have (ex: Forms)
- [ ] Find alternative to jQuery Validator working with plain js
- [x] Setup unit test examples - Patrick
- [ ] Setup E2E tests with CrossBrowserTesting.com - Patrick
- [ ] Create Readme Markdown files with examples of various things we use.
- [ ] List of reusable Vue components we could use:
  - [ ] Carousel
  - [ ] Tabs
  - [ ] Accordions
  - [ ] Modals
  - ... etc
- [ ] List of HTML/CSS components we could use:
  - [ ] Main Menu Dropdowns
  - [ ] Megamenu?
  - [ ] Full Width Hero
  - ... etc
- [x] Create static demo HTML page we could use to show what the grid/components look like: (./html/template_demo.html)
  - [ ] Add style to it
