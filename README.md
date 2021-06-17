# Prototype of a Zi Dashboard based solely on Angular

To install [nodejs](https://nodejs.org/en/download/) and [angular-cli](https://cli.angular.io/) needs to be installed on the system.

If this is the case, the Dashboard can be tested with the following commands from the root directory.

`cd Dashboard`

First launch only: `npm install`

`ng serve`

Pro build for github pages

1. `ng build  --base-href "/gbe_koeln/" --configuration production --aot true"`
2. `cp docs/index.html docs/404.html`