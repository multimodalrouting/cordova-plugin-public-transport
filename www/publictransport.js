/**
 * Cordova Public Transport Plugin
 */

var exec = require('cordova/exec'),
    channel = require('cordova/channel');

var PublicTransport = (function () {

  function Template() {
  }

  Template.prototype.echo = function (echoValue, successCallback) {
    cordova.exec(successCallback, function () {
      console.log('Error')
    }, 'Public Transport', 'echo', [echoValue]);
  };


  return Template;

})();

var publicTransport = new PublicTransport();
module.exports = publicTransport;

