---
date: 2019-01-24
title: 'How to write a loop in a React app'
template: post
thumbnail: '../thumbnails/git.png'
slug: How-to-write-a-loop-in-a-React-app
categories:
  - javascript
  - React
tags:
  - javascript
  - react
  - loop
---


How to write a loop in a React app


You can create a loop, and then add JSX to an array:

```javascript
const elements = [] //..some array

const items = []

for (const [index, value] of elements.entries()) {
  items.push(<Element key={index} />)
}
```
Now when rendering the JSX you can embed the items array by wrapping it in curly braces:
```javascript
render() {
  const elements = ['one', 'two', 'three'];

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }

  return (
    <div>
      {items}
    </div>
  )
}
```
You can do the same directly in the JSX, using map instead of a for-of loop:
```javascript
render: function() {
  const elements = ['one', 'two', 'three'];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}
```