var hello_node = require('./build/Release/hello_node');

var hello = new hello_node.HelloWorld();
console.log(hello.constructor.name);
console.log(hello.say());
