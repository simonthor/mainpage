# Mainpage version 1.0 [![GitHub license](https://img.shields.io/badge/license-GPLv3.0-blue.svg)](https://github.com/simonthor/mainpage/blob/master/LICENSE)
A minimalist Firefox extension for redirecting to the front page of a website. 
This version of mainpage is planned to be uploaded to the [Mozilla add-ons page](https://addons.mozilla.org).
All the files (no more, no less) for the actual firefox extension is in the [mainpage-1.0](/mainpage-1.0.zip) zip-folder.

## Tutorial
Once installed, the mainpage icon will appear in the toolbar. Press it, and you will be redirected to your current tab's website's front page.
It's as simple as that!

Note: This extension will redirect to the subdomain's front page, not to the entire website's front page. 
**This is an intentional feature, not a bug.**
Although another feature for redirecting to the entire domain's front page might be added in future versions.

## Examples
- ```https://github.com/simonthor/mainpage``` &rarr; ```https://github.com```
- ```https://cdn.eso.org/images/large/yb_big_dog_paranal_cc.jpg``` &rarr; ```https://cdn.eso.org```
- ```https://www.youtube.com/watch?v=dQw4w9WgXcQ``` &rarr; ```https://www.youtube.com```

## Installation
The extension is currently not available on the Firefox add-ons page but can still be installed manually.
1. Download this repository.
2. Write ```àbout:debugging#/runtime/this-firefox``` in the url bar in Firefox.
3. Click on "add temporary add-on"
4. Choose any file in the repository (e.g. ```manifest.json```).
5. Done! The logo should now appear in the toolbar in the top right corner of Firefox.

![mainpage logo](icons/icon.svg)

&copy; Simon Thor 2020
