'use strict';
const moduleB = require('module-b');

const moduleA =()=>{
    console.log(moduleB.sayHello())
}

export default moduleA