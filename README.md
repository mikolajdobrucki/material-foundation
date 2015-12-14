Material Foundation
===================

![Material Foundation](https://github.com/eucalyptuss/material-foundation/raw/master/images/cover.png?raw=true)

Material Design version of Foudation Framework by Zurb

**Supported Foundation Version**: 6.0.3

**Demo**: [http://eucalyptuss.github.io/material-foundation/](http://eucalyptuss.github.io/material-foundation/)

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:eucalyptuss/material-foundation.git
npm install && bower install
```

While you're working on your project, run:

`grunt watch`

or make grunt watch and compile all your CSS and javascript, or run:

`grunt`

to compile files manually

## Directory Structure

scss/

  * `material-foundation.scss`: Main CSS file
  * `demo.scss`: CSS for the preview purposes, don't mind it
  * `scss/_settings.scss`: here we're adjusting Foundation as far as possible to avoid unnecessary overwriting
  * `_foudation-util.scss`: here Foundation's SASS utilities are imported
  * `_foudation.scss`: the rest of original Foundation's code
  * `scss/app.scss`: Application styles go here

## Components ##

Please note that not all the Foundation components are 'materialised'. By default, Material Foundation include only the styled ones. However if you want to use some of the other components all you must do is uncommenting them in `_foundation.scss`.
