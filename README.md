# US FE template

Vue-CLI template for Chicago Office FE.

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
- [ ] Setup linting with a modified StandardJS
- [x] Take Grid we already have in stuff like AE
  - [ ] Write documentation about the grid, and show all utilities and how to use the grid system.
- [ ] Implement new questions based on configurations, ie Vue yes/no, Unit tests yes/no etc etc.
- [ ] Setup webpack configuration
- [x] Find good living styleguide for webpack implementations
  - [x] [Stylemark](https://github.com/nextbigsoundinc/stylemark) - Branch: styleguide-stylemark | Review - Best one so far, we just need to see if it can include vue components.
    - [ ] Test including vue components
  - [x] [SC5](https://github.com/SC5/sc5-styleguide) - Branch: styleguide | Review - Has too many errors when using basic less functions.
  - [x] [DevBridge](https://github.com/devbridge/Styleguide) - Branch: styleguide-devbridge | Review - Not robust enough for us, only generates stuff thats in variables. Rest of styles and markup have to be inputted manually, and not inside our source code.
- [ ] Cleanup CSS
  - [ ] Eliminate some styles since this was coppied from another site.
  - [ ] Add any base styles that we would like to have (ex: Forms)
- [ ] Find alternative to jQuery Validator working with plain js
- [ ] Setup unit test examples - Patrick
- [ ] Setup E2E tests with CrossBrowserTesting.com - Patrick
- [ ] Create Readme Markdown files with examples of various things we use.
- [ ] List of reusable Vue components we could use:
  - [ ] Carousel
  - [ ] Tabs
  - [ ] Accordions
  - ... etc
- [ ] List of HTML/CSS components we could use:
  - [ ] Main Menu Dropdowns
  - [ ] Megamenu?
  - [ ] Full Width Hero
  - ... etc
- [x] Create static demo HTML page we could use to show what the grid/components look like: (Assets/Demo)