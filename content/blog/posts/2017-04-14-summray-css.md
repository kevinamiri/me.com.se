---
date: 2017-04-14
title: 'A start to reviewing css again'
description: 'a summary to review css again'
template: post
thumbnail: '../thumbnails/git.png'
slug: css-a-summary
categories:
  - css
tags:
  - css
  - styling
  - my notebook
---



###CSS selector for entire element

For example, if you wanted all h2 elements to be red, you would add a style rule that looks like this:

```css
<style>
  h2 {
    color: red;
  }
</style>
```

####what we should notice
- curly braces { } around each element's style 

- opening and closing style tags 
```css
<style> tags </style>

```
 
- semicolon to the end of each of your element's

___
###CSS Class 
```css
<style>
  .blue-text {
    color: blue;
  }
</style>
```

* class names start with a period.
*  the class name does not include the period

___

###Import a Google Font
Paste it into the top of your code editor (before the opening style element):

```css
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```
font-family: FAMILY_NAME, GENERIC_NAME;.


```css
<style>
    h2 {
    font-family: Lobster; 
    }
  
  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>
```

For example, if you wanted an element to use the Helvetica font, but degrade to the sans-serif font when Helvetica isn't available, you will specify it as follows:

```css
p {
  font-family: Helvetica, sans-serif;
}
```
___
###size of an image

```css
.smaller-image {
    width: 100px;
  }
```
___

###CSS Borders

```css

.thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

```
Rounded Corners : 
```css

border-radius: 10px
```
Make Circular Images with a border-radius

```css
border-radius: 50%;
```
___

Classes => putting a . in front of 

ids => by putting a # in front of 

```css
#cat-photo-element {
  background-color: green;
}
```

__

An element's padding controls the amount of space between the element's content and its border.

__

####Add a Negative Margin to an Element

If you set an element's margin to a negative value, the element will grow larger.

```javascript
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

CSS allows you to control the padding of all four individual sides of an element with the padding-top, padding-right, padding-bottom, and padding-left properties.


___

Instead of specifying an element's padding-top, padding-right, padding-bottom, and padding-left properties individually, you can specify them all in one line, like this:

```css
padding: 10px 20px 10px 20px;
```

These four values work like a clock: top, right, bottom,





z-index in css

```html

<div class="red">Positioned</div>
<div class="green">Non-positioned</div>
```
```css

.red, .anything {
  position: absolute;
}

.red {
  top: 50px;
  left: 40px;
  background: rgb(239, 71, 111);
}

.green {
  background: rgb(6, 214, 160);
}

div {
  height: 150px;
  width: 150px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  text-align: right;

}
```
___

####All of other elements will inherit your body element's styles.



```css
<style>
  body {
    background-color: orange;
    color:green;
    font-family: monospace;
  }
</style>
<h1>Hello world</h1>
```



___


