# Mobile Debugger[![npm version](https://badge.fury.io/js/notification-logger.svg)](https://badge.fury.io/js/notification-logger)

Mobile Debugging involves the tedious process of setting up. Chrome and Firefox provide tools for Remote Debugging, however, the setup overhead is huge.

Mobile Debugger makes the debugging process for web based mobile applications easier.

Just include the library and access all your logs at mobiledubugger.com.

And it only adds ~100 lines to your project.

[Demo](http://mobiledebugger.com)

## Installing
 - Use `npm` or `git clone` to download the module.
   - `npm install mobiledebugger`
   - `git clone https://github.com/hkirat/mobiledebugger.git`
 - Include mobiledebugger.js
  - npm install mobiledebugger.js
  - `<script src = "https://raw.githubusercontent.com/hkirat/mobiledebugger.js/master/mobiledebugger.js"></script>`
 - Include JQuery
 - Set global variable ROOM_NAME to your preferred name
 - Open your mobile site, Access your logs at mobiledebugger.com/room/ROOM_NAME`

## Application
 Access log statements and errors at mobiledebugger.com. Get rid of the tedious process of setting up remote debugging. 
  
## Browser Support
Works best on latest versions of Google Chrome, Firefox and Safari.

## To Do
 - Make line numbers independent of browser
 - Wrap line numbers for console.logs

## Credits
 Initial fork from notification-logger which is inspired from screenlog.js