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

/*
a = [1, 2, 3];
b = [3, 2, 1];
//a + b = ?
console.log(a + b);
//1,2,33,2,1😅*/

function fillArray(n) {
    const top = n % 2 ? (~~(n / 2) + 1) : n / 2;
    const arr = [];
    for (let i = 1; arr.push(i) <= top - 1; i++);
    return n % 2 ? [...arr, ...arr.slice(0, arr.length - 1).reverse()] : [...arr, ...arr.reverse()];
}
console.log(fillArray(11).toString());

/*
const data = [
    {name: 'Iris', val: 123, grade: 'A'},
    {name: 'Neo', val: 233, grade: 'A'},
    {name: 'Mex', val: 144, grade: 'B'},
    {name: 'Jerry', val: 23, grade: 'C'},
    {name: 'Gait', val: 98 , grade: 'D'},
    {name: 'Hey', val: 39 , grade: 'C'}
];

/!*function group(data) {
    const set = new Set();
    const result = [];
    data.forEach(i => {
        set.add(i.grade);
    });
    set.forEach(s => {
        result.push(data.filter(i => i.grade === s).sort((a, b) => a.val > b.val));
    });
    return result;
}*!/

function group(data) {
    const set = new Set();
    data.forEach(i => set.add(i.grade));
    return Array.from(set).map(s => {
        return [...data.filter(i => i.grade === s).sort((a, b) => a.val > b.val)];
    });
}

console.log(group(data));*/



// 当时大体思路就是判断n的奇偶性，反转数组，再合成。
//
// 1.vue & AngularJs 1.x双向数据绑定如何实现？
// 2.如何不用new，创建一个对象，具有原对象的属性方法？
// 3.css模块化怎么实现？
// 4.call & apply 区别？
// 5.

class JuejinFrontendEnginnerSpecification implements Specification {
    isSatisfiedBy(person) {
        return person.isInteresting() && person.canWriteBUG()
    }
}

class JuejinFrontendEnginner extends FrontendEngineer {
    constructor(person) {
        super(person)
        this.thingList = [
            'ES6+',
            'Node.js v8+',
            'Vue.js v2.4+',
            'SSR',
            'Chrome (Extension|Headless)',
            'Weixin',
            'Docker',
            'rm -rf /',
            'escape'
        ]
    }

    doSomeInterestingThings() {
        this.thingList.forEach(this.tryToPlay.bind(this))
    }

}
const juejinFrontendEnginnerSpecification = new JuejinFrontendEnginnerSpecification();
if (juejinFrontendEnginnerSpecification.isSatisfiedBy(you)) {
    new JuejinFrontendEnginner(you).doSomeInterestingThings()
}