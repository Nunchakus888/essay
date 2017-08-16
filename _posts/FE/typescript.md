# Typescript learn notes~~

1.Typescript类型断言，将 something 断言成 string
```
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
```
在需要断言的变量前加上 < Type > 即可。类型断言不是类型转换，
断言成一个联合类型中不存在的类型是不允许的：
```
function toBoolean(something: string | number): boolean {
  return <boolean>something;
}

// index.ts(2,10): error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
//   Type 'number' is not comparable to type 'boolean'.
```
接口中函数的定义我们也可以使用接口的方式来定义一个函数需要符合的形状：
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
```
- declare定义的类型只会用于编译时的检查，编译结果中会被删除。
- 接口可以继承接口
- 接口可以继承类
+ public修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
+ private修饰的属性或方法是私有的，不能在声明它的类的外部访问

+ 抽象类是不允许被实例化, 抽象类中的抽象方法必须被子类实现:
```
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}
```
枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
```

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```
编译后--------我看笑了, 挺有意思:
```
var Days;
(function (Days) {
  Days[Days["Sun"] = 0] = "Sun";
  Days[Days["Mon"] = 1] = "Mon";
  Days[Days["Tue"] = 2] = "Tue";
  Days[Days["Wed"] = 3] = "Wed";
  Days[Days["Thu"] = 4] = "Thu";
  Days[Days["Fri"] = 5] = "Fri";
  Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
```

### 装饰器
```
declare type ClassDecorator = 
<TFunction extends Function>(target: TFunction) => TFunction | void



function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log('Hello!');
  }
}

@Greeter
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
myGreeting.greet(); // console output: 'Hell
```

