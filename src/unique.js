const angular = require('angular');

const uniqueFilter = angular.module('ns.filter.unique', []);

uniqueFilter.filter('unique', function () {
  return function (collection, field) {
    const output = [];
    const keys = [];
    const fields = field && field.split('.');
    angular.forEach(collection, function (item) {
      const key = fields ? fields.reduce((key, field) => key[field], item) : item;
      if (!keys.some(prev => angular.equals(prev, key))) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});

module.exports = uniqueFilter;
