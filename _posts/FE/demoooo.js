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
    n += 1;
    while (n--) {
        console.log(n);
        if (n && n <= top) {
            arr.push(n);
        } else if (n > top){
            arr.push(2 * top - n);
            console.log('>>>', 2 * top - n);
        }
    }
    console.log(arr);
    return arr;
}
fillArray(7);

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
