# Mainpage version 1.0 [![GitHub license](https://img.shields.io/badge/license-GPLv3.0-blue.svg)](https://github.com/simonthor/mainpage/blob/master/LICENSE) [![Install here!](https://img.shields.io/badge/install-red.svg)](https://addons.mozilla.org/firefox/addon/mainpage/)
A minimalist Firefox extension for redirecting to the front page of a website. 

## How to use
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
The 1.0 version of mainpage can now be installed on the [Mozilla add-ons page](https://addons.mozilla.org/firefox/addon/mainpage/).
To be fully transparent, all the files (no more, no less) I have uploaded to Firefox is in the [mainpage-1.0](/mainpage-1.0.zip) zip-folder.

For the newest version that has not been uploaded to the Firefox Add-ons page yet (warning: may contain bugs), go to the ```development``` branch and follow the instructions below (also avaliable in that branch).
1. Download this repository.
2. Write ```about:debugging#/runtime/this-firefox``` in the url bar in Firefox.
3. Click on "add temporary add-on"
4. Choose any file in the repository (e.g. ```manifest.json```).
5. Done! The logo should now appear in the toolbar in the top right corner of Firefox.

![mainpage logo](icons/icon.svg)

&copy; Simon Thor 2020
