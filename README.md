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
- [ ] Decide on Less/cssnext based on VS compatibility - Joe
- [ ] Folder structure to follow our basic project structure
  - All config files in *.Web
  - All assets under *.Web/Assets/
  - All compiled files into */bundled/
- [ ] Setup linting with a modified StandardJS
- [ ] Take Grid we already have in stuff like AE
  - [ ] Write documentation about the grid, and show all utilities and how to use the grid system.
- [ ] Implement new questions based on configurations, ie Vue yes/no, Unit tests yes/no etc etc.
- [ ] Setup webpack configuration
- [ ] Find good living styleguide for webpack implementations (SC5?)
- [ ] Setup unit test examples - Patrick
- [ ] Setup E2E tests with CrossBrowserTesting.com - Patrick
- [ ] Create Readme Markdown files with examples of various things we use.
- [ ] List of reusable Vue components we could use:
  - [ ] Carousel
  - [ ] Tabs
  - [ ] Accordions
  - ... etc
