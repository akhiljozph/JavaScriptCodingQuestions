# JavaScriptCodingQuestions

## Output Predictions

### JSOP-1
```javascript
console.log(false == 0);
```

### JSOP-2
```javascript
console.log(false === 0);
```

### JSOP-3
```javascript
console.log(null == undefined);
```

### JSOP-4
```javascript
console.log(null === undefined);
```

### JSOP-5
```javascript
console.log([] == false);
```

### JSOP-6
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### JSOP-7
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

console.log("Done");
```

### JSOP-8
```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
}).then(() => {
    console.log("E");
});

queueMicrotask(() => {
  console.log("F");
});

console.log("G");
```

### JSOP-9
```javascript
let original = { name: "Alice", details: { age: 25 } };
let clone = { ...original };

clone.name = "Bob";
clone.details.age = 30;

console.log(original.name);
console.log(original.details.age);
```

### JSOP-10
```javascript
function updateProfile(user) {
  user.age = 21;
  user = { name: "John", age: 30 };
  return user;
}

const person = { name: "Alex", age: 20 };
const newPerson = updateProfile(person);

console.log(person.age);
console.log(newPerson.age);
```

### JSOP-11
```javascript
var x = 10;

function test() {
  console.log(x);
  var x = 20;
  console.log(x);
}

test();
```

### JSOP-12
```javascript
var x = 10;

function test() {
    console.log(x);

    if (true) {
        var x = 20;
    }

    console.log(x);
}

test();

console.log(x);
```

### JSOP-13
```javascript
console.log(typeof foo);

var foo = function () {
    return "Hello";
};

console.log(typeof foo);

function foo() {
    return "Hi";
}
```

### JSOP-14
```javascript
console.log(foo);

var foo = 1;

function foo() {
    return 2;
}

console.log(foo);
```

### JSOP-15
```javascript
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();
```

### JSOP-16
```javascript
const person = {
    name: "Akhil",
    sayName() {
        console.log(this.name);
    }
};

const another = {
    name: "John",
    sayName: person.sayName
};

person.sayName();
another.sayName();

const fn = person.sayName;
fn();
```

### JSOP-17
```javascript
const obj = {
    name: "Akhil",

    regular() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

const regular = obj.regular;
const arrow = obj.arrow;

regular.call({ name: "John" });
arrow.call({ name: "John" });

obj.regular();
obj.arrow();
```