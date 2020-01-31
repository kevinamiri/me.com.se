---
date: 2018-09-24
title: 'Advanced working with functions'
template: post
thumbnail: '../thumbnails/git.png'
slug: Advanced-working-javascript-functions
categories:
  - javascript
tags:
  - Recursion 
  - javascript
---



### Recursion function 

Recursion is a function that can be expressed in terms of itself.


```javascript
  function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }

```

## notice that
```
multiply(arr, n) == multiply(arr, n - 1) * arr[n]

```



### loop

```javascript
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8
```

### Recursive function: how function call itself.
```javascript
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

```

When pow(x, n) is called, the execution splits into two branches:
```

              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)

```