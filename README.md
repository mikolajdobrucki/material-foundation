Material Foundation
===================

![Material Foundation](https://github.com/eucalyptuss/material-foundation/raw/master/images/cover.png?raw=true)

Material Design version of Foundation for Sites by Zurb

**Supported Foundation Version**: 6.2.3

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
  * `scss/_foundation.scss`: the rest of original Foundation's code is imported here

## How to use Material Foundation

1. Import `material-foundation.scss` to your stylesheet (the same way it is done in the demo file).
2. Set your primary and accent colors using the `$foundation-palette` variable and override any other variables if necessary. Include the variables **before** the `material-foundation` stylesheet.
3. Include `material-foundation.js` before your closing `</body>` tag.

And that's it!

## How to use Material Foundation with an existing Foundation project

To use Material Foundation with an existing Foundation project you can simply replace the Foundation with Material Foundation and everything should work as expected.

However, due to the differences between Foundation and Material Design Guidelines, some of the Material Foundation components are not based on the original Foundation's markup. To use them in your project you have to use the Material Foundation specific classes, e.g. `floating-action-button` to use a Floating Action Button.

To view how the original Foundation components behave with the Material Foundation styles check the [Kitchen Sink]((http://eucalyptuss.github.io/material-foundation/kitchen-sink.html)) on the Material Foundation website.
