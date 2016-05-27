var postcss = require('postcss');

module.exports = postcss.plugin('postcss-host-context', function () {
    return function (css) {
        css.walkRules(function (rule) {
            var replaced = [];
            rule.selectors.forEach(function (selector) {
                if (selector.indexOf(':host-context') === -1) {
                    replaced.push(':host-context ' + selector);
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
