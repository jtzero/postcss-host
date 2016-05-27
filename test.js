import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output) {
    return postcss([ plugin ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

test('adds :host-context selector', t => {
    return run(t, 'h3, b {}', ':host-context h3, :host-context b {}');
});

test("doesn't double :host-context selector", t => {
    return run(t, ':host-context a {}',
                  ':host-context a {}');
});
