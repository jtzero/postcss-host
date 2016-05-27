# PostCSS HostContext [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to add `:host-context` selector to every selector.

Purpose? work around for this https://github.com/angular/angular/issues/7108

[PostCSS]:                    https://github.com/postcss/postcss


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
