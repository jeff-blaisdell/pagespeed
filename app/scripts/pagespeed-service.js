define(['di'], function($__0) {
  "use strict";
  var __moduleName = "pagespeed-service";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var Inject = $traceurRuntime.assertObject($__0).Inject;
  var PageSpeed = function PageSpeed() {};
  ($traceurRuntime.createClass)(PageSpeed, {get: function() {
      return 'Your site is slow.';
    }}, {});
  return {
    get PageSpeed() {
      return PageSpeed;
    },
    __esModule: true
  };
});
