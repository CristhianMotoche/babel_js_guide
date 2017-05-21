# Babel JS

BabelJS is a transpiler for different specifications of ECMAScript.

To build the examples run the following command:

```shell
$ npm run build
```

# Examples
## ES2015: Arrow functions transform
Arrow function expression is a short syntax for function expression and does not
bind its own this, arguments, super, or new.target.

### Basic Syntax
```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
```

## ES2015: Classes
Classes in ES2015 are syntax sugar over existing prototype-based inheritance.
There are two ways to define classes:

### Class declarations
To declare a class, you use the class keyword with the name of the class.

```javascript
class Dog {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
```
**NOTE**: Class declarations are not *hoisted*.

### Class expressions
Class expressions can be named or unnamed. The name given to a named class
expression is local to the class's body.

```javascript
// unnamed
var Dog = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

// named
var Dog = class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};
```

## ES2015: Template Strings
Syntactic sygar for constructing strings.

```javascript
var hello = 'Hello template strings!';
var strings = `This is a template string. ${hello}`;
```

## ES2015: Let and const
- `let` is the new var
- `const` is single-assignment

```javascript
let x = 3;
x = "foo";
const y = 3;
y = "lol"; // Error
```
