# Numbers

### Cap `s.cap(max)`
>Cap a number. Returns `max` if the number is higher.  
**Arguments:** `max: float`
```js
var n = 10;
n.cap(20); // returns 10
n.cap(5); // returns 5
```

### Range `s.range(min, max)`
>Limit a number to a range. Returns `max` if the number is higher and `min` if it is is lower.  
**Arguments:** `min: float`, `max: float`
```js
var n = 10;
n.range(15, 20); // returns 15
n.range(0, 5); // returns 5
n.range(0, 15); // returns 10
```

---

# Strings

### Calc `s.calc()`
>Calculate the value of a string formula. Makes sure it starts with a number before executing.  
**Arguments:** `none`
```js
"1 + 2".calc(); // returns 3
"alert('Abuse!')".calc(); // returns undefined
```

### Capitalize `s.capitalize()`
>Make the first character of a string uppercase.  
**Arguments:** `none`
```js
"example sentence".capitalize(); // returns "Example sentence"
```

### CapitalizeAll `s.capitalizeAll()`
>Capitalize all words in a string.  
**Arguments**: `none`
```js
"example sentence".capitalizeAll(); // returns "Example Sentence"
```

### Classify `s.classify()`
>Make a string lowercase and replace all spaces.  
**Arguments**: `none`
```js
"Example class".classify(); // returns "example-class"
```

### Get `s.get(i)`
>Get the character at the index `i`. Allows negative index values.  
**Arguments**: `i: integer`
```js
"example".get(3); // returns "m"
"example".get(-3); // returns "p"
```

### Remove `s.remove(i)`
>Remove the character at the index `i` or remove the string `i`. Allows negative index values.  
**Arguments**: `i: integer/string`
```js
"example".remove(-3); // returns "examle"
"example".remove("e"); // returns "xampl"
```

### ReplaceAll `s.replaceAll(s, r)`
>Replace the string or regex `s` with the string `r`. Replaces all occurencies.  
**Arguments**: `s: string/regex`, `r: string`
```js
"example".replaceAll("e", "a"); // returns "axampla"
```
---

# Arrays

### Each `a.each(function(i, v) {})`
>Iterate over each value in an array. Sets `this` to the current value and passes `index` and `value` to the function `f`.  
**Arguments:** `f: function`
```js
var a = ["test", "array"];
a.each(function (index, value) {
    console.log(this); // logs the value
    console.log(index); // logs the index
    console.log(value); // logs the value
});
```

### Get `a.get(i)`
>Get the last entry with the index `i` from an array. Negative indexes count from the last entry.  
**Arguments:** `i: integer`
```js
var a = [1, 2, 3, 4, 5];
a.get(0); // returns 1
a.get(3); // returns 4
a.get(-2); // returns 4
```

### Last `a.last(i)`
>Get the last entry or entry with the index `i` counting from the last entry from an array.  
**Arguments:** `i: integer`
```js
var a = ["test", "array", "last"];
a.last(); // returns "last"
a.last(1); // returns "array"
```

### Remove `a.remove(s)`
>Remove the value `s` from an array. Returns the altered array.  
**Arguments:** `s`
```js
var a = ["test", "array"];
a.remove("test"); // returns ["array"]
console.log(a); // returns ["array"]
```

---

# Objects

### Contains `o.contains(s)`
>Test if an object contains the key or value `s`. Returns `true` or `false`.  
**Arguments:** `s`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.contains("name"); // returns true
o.contains(false); // returns true
o.contains("test"); // returns false
```

### ContainsValue `o.containsValue(s)`
>Test if an object contains the value `s`. Returns `true` or `false`.  
**Arguments:** `s`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.containsValue("name"); // returns false
o.containsValue(false); // returns true
o.containsValue("test"); // returns false
```

### Find `o.find(s)`
>Find all values equal to `s`. Returns an object with the according keys and values.  
**Arguments:** `s`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.find("test"); // returns {name: "test"}
```

### FindKeys `o.findKeys(s)`
>Find all values equal to `s`. Returns an array with the according keys.  
**Arguments:** `s`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.find("test"); // returns ["name"]
```

### Each `o.each(function(k, v) {})`
>Iterate over each key in an object. Sets `this` to the current value and passes `key` and `value` to the function `f`.  
**Arguments:** `f: function`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.each(function (key, value) {
    console.log(this); // logs the value
    console.log(key); // logs the key
    console.log(value); // logs the value
});
```

### Keys `o.keys()`
>Get an array with Object keys. Shorthand for `Object.keys(...)`.  
**Arguments:** `none`
```js
var o = {name: "test", boolean: false, numbers: [0, 1, 2]};
o.keys(); //returns ["name", "boolean", "numbers"]
```

---

# Math Functions

### Factorial `Math.factorial(n)`
>Get the factorial of the number `n`.  
**Arguments:** `n: integer`
```js
Math.factorial(4); // returns 24
```

### Binomial `Math.binomial(n)`
>Get the binomial coefficient of the number `n` choose the number `k`.  
**Arguments:** `n: integer`, `k: integer`
```js
Math.binomial(6, 2); // returns 15
```