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

test('adds :host selector', t => {
    return run(t, 'h3, b {}', ':host h3, :host b {}');
});

test("doesn't double :host selector", t => {
    return run(t, ':host a {}',
                  ':host a {}');
});

test("doesn't modify :host-context selector", t => {
    return run(t, ':host-context a {}',
                  ':host-context a {}');
});
