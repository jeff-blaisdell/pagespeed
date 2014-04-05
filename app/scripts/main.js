define(['./pagespeed-service'], function($__0) {
  "use strict";
  var __moduleName = "main";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var PageSpeed = $traceurRuntime.assertObject($__0).PageSpeed;
  function main() {
    var pageSpeed = new PageSpeed();
    console.log(pageSpeed.get());
  }
  main();
  return {};
});
