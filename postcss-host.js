var postcss = require('postcss');		
 		
module.exports = postcss.plugin('postcss-host', function () {		
    return function (css) {		
       css.walkRules(function (rule) {		
           var replaced = [];		
           rule.selectors.forEach(function (selector) {		
               if (selector.indexOf(':host(') === -1) {		
                  replaced.push(':host(' + selector);		
               } else {		
                  replaced.push(selector);		
               }		
           });		
           if ( replaced.length ) {		
               rule.selectors = replaced;		
           }		
       });		
    };		
});
