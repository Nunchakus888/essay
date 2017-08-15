### Notes..

+ state :
    - 组件状态, 控制UI
    - 在组件内部初始化，只能被自身修改，外部不可见
    - state 中状态可以通过 this.setState(由父类 Component提供) 方法进行更新，setState 会导致组件的重新渲染。

+ props : 组件属性
    - props一旦传入，不可以在组件内部对它进行修改。该组件的父组件可以传入参数来配置该组件
    - 使用组件时把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值：
    - 可以通过给组件添加类属性 defaultProps 来配置默认参数。
    - 父组件重新渲染会传入新的 props 以及更新。
    - _使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 props.children 获取到_
##### state是让组件控制自己的状态，props是让外部对组件自己进行配置。

+ 钩子函数
    - componentWillMount ：组件挂载开始之前，也就是在组件调用 render 方法之前调用。(一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等可以放在componentWillMount里面处理。)
    - componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。(有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中)
    - componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
    - shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
    - componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
    - componentWillUpdate()：组件开始重新渲染之前调用。
    - componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。

###### abcdefg......
+ React.js 当中提供了 ref 属性 我们可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。但是记住一个原则：能不用 ref 就不用
+ 也可以给组件标签也加上 ref
+ 通过 PropTypes 给组件的参数做类型限制
+ 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。新的组件使用传入的组件作为子组件。

+ 组件常用编写规范
```
** static 开头的类属性，如 defaultProps、propTypes。
** 构造函数，constructor。
** getter/setter（还不了解的同学可以暂时忽略）。
** 组件生命周期。
** _ 开头的私有方法。
** 事件监听方法，handle*。
** render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
** render() 方法。
```

##### Redux & React-Redux
+ Redux 是一种架构模式（Flux 架构的一种变种），它不关注你到底用什么库，你可以把它应用到 React 和 Vue，甚至跟 jQuery 结合都没有问题。
而 React-redux 就是把 Redux 这种架构模式和 React.js 结合起来的一个库，就是 Redux 架构在 React.js 中的体现。
