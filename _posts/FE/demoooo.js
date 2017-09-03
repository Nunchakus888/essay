/*
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
*/


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

/*
来删我啊 = {
    名字: '牛逼'
};
Object.seal(来删我啊);
来删我啊.叼不叼 = '叼'; //添加不成功
console.log(来删我啊);
delete 来删我啊.名字; //false
delete 来删我啊; //true

*/
/*

a来遍历我啊 = {
    让不让遍历: '坚决不让！'
};
Object.defineProperty(a来遍历我啊, 'hello', {
    enumerable: false,
    writable: false, //不可更改
    value: 'world'
});
for (var i in a来遍历我啊) {
    console.log(i) //输出没有hello属性.
}*/


/*
const generator = function * () {
    yield console.log();
    yield console.log('hello');
    yield console.log('generator😄');
    while (1) {
        yield console.log('😄')
    }
};
const run = myGenerator => {
    const myIterator = myGenerator();
    let next;
    do {
        next = myIterator.next();
    } while (!next.done)
};
run(generator);*/

a = [1, 2, 3];
b = [3, 2, 1];
//a + b = ?
console.log(a + b);
//1,2,33,2,1😅