Material Foundation
===================

![Material Foundation](https://github.com/eucalyptuss/material-foundation/raw/master/images/cover.png?raw=true)

Material Design version of Foundation Framework by Zurb

**Supported Foundation Version**: 6.2.0

**Demo**: [http://eucalyptuss.github.io/material-foundation/](http://eucalyptuss.github.io/material-foundation/)

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone https://github.com/eucalyptuss/material-foundation.git
cd material-foundation
npm install && bower install
```

While you're working on your project, run:

`grunt watch`

to make grunt watch and compile all your CSS and javascript, or run:

`grunt`

to compile files manually

## Directory Structure

scss/

  * `material-foundation.scss`: Main CSS file
  * `demo.scss`: CSS for the preview purposes, don't mind it
  * `scss/_global.scss`: global settings
  * `_foundation.scss`: the rest of original Foundation's code is imported here
