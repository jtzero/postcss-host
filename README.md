# PostCSS Host [![Codeship Status for postcss-host][ci]][ci-prj]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to add `:host` selector to every selector.

Purpose? work around for this https://github.com/angular/angular/issues/7108

[PostCSS]:                    https://github.com/postcss/postcss
[ci]:                         https://codeship.com/projects/8262bf80-0661-0134-3de8-0e3a4704bd9d/status?branch=master
[ci-prj]:                      https://codeship.com/projects/154703


```css
:host h3 {
    outline: 0;
}
.button:hover {
    background: red;
}
```

```css
:host h3 {
    outline: 0;
}
:host .button:hover {
    background: red;
}
```

## Usage

```js
postcss([ require('postcss-host') ])
```

### Gulp example

```js
var processorArray = [
    require('postcss-host')()
];

gulp.task('pipe-styles', function () {
    gulp.src('src/assets/*.css')
        .pipe(postcss(processorArray))
        .pipe(gulp.dest('dist/assets/'))
});
```
