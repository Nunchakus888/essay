class A {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class B extends A {
    constructor(name) {
        super(name);
    }
}

console.log(B.__proto__ === A); //true
console.log(B.prototype.__proto__ === A.prototype); //true


/*
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

function Man(name) {
    Person.apply(this, arguments); //改变执行作用域实现对父类对象的属性继承。
}

Man.prototype = Object.create(Person.prototype); //对父类对象方法的继承.
man = new Man(23333);
console.log(man.name); //23333
console.log(man.getName()); //23333*/
