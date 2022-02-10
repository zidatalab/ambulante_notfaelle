# Code for Ambulante Notfaelle Dashboard

To install [nodejs](https://nodejs.org/en/download/) and [angular-cli](https://cli.angular.io/) needs to be installed on the system.

If this is the case, the Dashboard can be tested with the following commands from the root directory.

`cd Dashboard`

First launch only: 

`npm install`

`ng serve`

Pro build for github pages

1. `cd Dashboard`
2. `ng build  --base-href "/" --configuration production --aot true`
3. `cp ../docs/index.html ../docs/404.html`