# whitewater-adventures

Based on the pluralsight course [Building a SPA framework using AngularJS](https://app.pluralsight.com/library/courses/building-spa-framework-angularjs) by Mark Zamoyta.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1. As well as the upstream fork, it also uses code from [bklep246/WhitewaterAdventures](https://github.com/bklep246/WhitewaterAdventures). I have stripped out all the extraneous stuff, removed all the Microsoft files and de-modularised it for simplicity, so that it remains a pure Yeoman scaffolded project.

## Build & development

Run `grunt serve` for preview at http://localhost:9000. It does work but I think some of it is incomplete. The user profile drop down menu does not work.  I need to re-watch the [pluralsight tutorial](https://app.pluralsight.com/library/courses/building-spa-framework-angularjs) on which this is based and see if I can fill in any gaps, if there are any. The dashboard, however, does seem to work which is the main reason I created this project.

Run `grunt build` to create the distributable.
