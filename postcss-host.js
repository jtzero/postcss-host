var postcss = require('postcss');

module.exports = postcss.plugin('postcss-host', function () {
    return function (css) {
        css.walkRules(function (rule) {
            var replaced = [];
            rule.selectors.forEach(function (selector) {
            var idx = selector.indexOf(':host');
                var hostCtxIdx = selector.indexOf(':host-context');
                if (idx === -1 && !(hostCtxIdx === -1 && hostCtxIdx !== idx)) {
                  replaced.push(':host ' + selector);
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
