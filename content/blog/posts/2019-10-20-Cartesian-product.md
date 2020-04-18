---
date: 2019-10-20
title: "Cartesian product of the javascript array"
description: "snippet code for Cartesian product of the javascript array"
template: post
thumbnail:
slug: Cartesian-product-of-the-javascript-array
categories:
  - algorithms
  - javascript
  - mathematics
tags:
  - javascript
  - Cartesian product
  - Multiplication of two array consisting of string and number
---

In set theory, the Cartesian product of two sets A and B, denoted A × B that returns a set or (product ) from multiple sets.

Cartesian product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.

Cartesian product AxB of two sets A={x,y,z} and B={1,2,3}

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cartesian_Product_qtl1.svg/1920px-Cartesian_Product_qtl1.svg.png)

Ordered Pair: An ordered pair is a pair of objects where one element is designated first and the other element is designated second, denoted (a, b).

In set-builder notation, A × B = {(a, b) : a ∈ A and b ∈ B}.

Example: A = {X, Y} and B = {1, 2, 3, 4, 5, 6}.

A × B = {(X, 1), (X, 2), (X, 3), (X, 4), (X, 5), (X, 6), (Y, 1), (Y, 2), (Y, 3), (Y, 4), (Y, 5), (Y, 6)}

B × A = {(1, X), (2, X), (3, X), (4, X), (5, X), (6, X), (1, Y), (2, Y), (3, Y), (4, Y), (5, Y), (6, Y)}

```javascript
const cartesianProduct = (setA, setB) => {
  // Check if input sets are not empty.
  if (!setA || !setB || !setA.length || !setB.length) {
    return null
  }
  // Init product set.
  const product = []

  // Go through all elements of sets and push all possible pairs.
  for (let indexA = 0; indexA < setA.length; indexA += 1) {
    for (let indexB = 0; indexB < setB.length; indexB += 1) {
      // Add current product pair to the product set.
      product.push([setA[indexA], setB[indexB]])
    }
  }

  // Return cartesian product set.
  return product
}
```
