import angular from 'angular';
import kayakHeader from './modules/common/directives/header.js';
//

var {bootstrap} = angular;


angular.module('kayak', [])
.directive('kyHeader', kayakHeader);



bootstrap(document.body, ['kayak']);

