var postcss = require('postcss');		
 		
module.exports = postcss.plugin('postcss-host', function () {		
    return function (css) {		
       css.walkRules(function (rule) {		
           var replaced = [];		
           rule.selectors.forEach(function (selector) {
                var idx = selector.indexOf(':host');
                if (idx === -1 && selector.indexOf(':host-context') !== idx) {		
                  replaced.push(':host' + selector);		
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
