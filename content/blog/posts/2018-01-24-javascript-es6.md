---
date: 2018-01-24
title: 'some javascript code in my notebook'
description: 'what javascript code for practice'
template: post
thumbnail: '../thumbnails/git.png'
slug: summary-javascript
categories:
  - javascript
tags:
  - javascript
  - ES6
  - my notebook
---



 
 
 a function that can get the all parameters of an array then make some calculating
 
 
```javascript

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

```

___

Select all in javascript!   spread in javascript

when we are try to select all of an array

```javascript

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 


console.log(arr2); 

```
___


####Destructuring syntax

for extract out values form objects

what we had in ES5

```javascript

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
//in ES6
const {name, age} = user;
//name = 'john doe', age = 34
```


```javascript

const high_temperatures = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today); // should be 77

```
####Destructuring Assignment to Assign Variables from Objects


#### - turn objects to variable


```javascript


const user = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34

//---------------------------------

const obj = {user: 'kevin', date: '2019-10-10', email: 'kevin@me.com.se'};

const { user: userName, date: expairDate, email: userEmail } = obj


```















