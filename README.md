# PostCSS HostContext [![Codeship Status for postcss-host-context][ci]][ci-prj]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to add `:host-context` selector to every selector.

Purpose? work around for this https://github.com/angular/angular/issues/7108

[PostCSS]:                    https://github.com/postcss/postcss
[ci]:                         https://codeship.com/projects/8262bf80-0661-0134-3de8-0e3a4704bd9d/status?branch=master
[ci-prj]:                      https://codeship.com/projects/154703


```css
:host-context h3 {
    outline: 0;
}
.button:hover {
    background: red;
}
```

```css
:host-context h3 {
    outline: 0;
}
:host-context .button:hover {
    background: red;
}
```

## Usage

```js
postcss([ require('postcss-host-context') ])
```

### Gulp example

```js
var processorArray = [
    require('postcss-host-context')()
];

gulp.task('pipe-styles', function () {
    gulp.src('src/assets/*.css')
        .pipe(postcss(processorArray))
        .pipe(gulp.dest('dist/assets/'))
});
```
