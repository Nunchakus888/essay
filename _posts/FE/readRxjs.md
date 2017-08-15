### Observble

```
export declare class Observable<T> implements Subscribable<T> {
    _isScalar: boolean;
    protected source: Observable<any>;
    protected operator: Operator<any, T>;
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic);
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    static create: Function;
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    lift<R>(operator: Operator<T, R>): Observable<R>;
    /**
     * Registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     * @method subscribe
     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     */
    subscribe(): Subscription;
    subscribe(observer: PartialObserver<T>): Subscription;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    protected _trySubscribe(sink: Subscriber<T>): TeardownLogic;
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    forEach(next: (value: T) => void, PromiseCtor?: typeof Promise): Promise<void>;
    protected _subscribe(subscriber: Subscriber<any>): TeardownLogic;
    static if: typeof IfObservable.create;
    static throw: typeof ErrorObservable.create;
}


```

##### export declare class Observable<T> implements Subscribable<T>
###### Let's go to the Subscribable difinations...

```
export interface Subscribable<T> {
    subscribe(observerOrNext?: PartialObserver<T> | ((value: T) => void), error?: (error: any) => void, complete?: () => void): AnonymousSubscription;
}
```
然后发现这个Subscribable接口定义了一个subscribe方法, 看方法参数(⊙o⊙)…(⊙o⊙)…(⊙o⊙)…
到这里是不是直接懵圈了?(⊙o⊙)...莫方, 前方有我😋, 我们把它copy出来, 自己整理下格式, 看是个何方妖孽😋😋
PartialObserver, 局部观察? 继续看定义...
```
export declare type PartialObserver<T> = NextObserver<T> | ErrorObserver<T> | CompletionObserver<T>;
```

好像看出来几个不同情况下的观察者, 嗯, 有点意思, 继续...
回车, 粗暴整理
```
export interface Subscribable<T> {
    subscribe(
        observerOrNext?: PartialObserver<T> | 
            ((value: T) => void), 
            error?: (error: any) => void, 
            complete?: () => void
    ): AnonymousSubscription;
}

```

👉结果发现跟你读一行代码理解的一样, 这个subscribe只需要一个参数:局部
Observe对象或void, 最后返回AnonymousSubscription类型的对象(字面意思上好像应该理解为匿名订阅者, 其实这里我理解的是任意订阅者, 后述原委),
接下来我们再看看这个AnonymousSubscription
又是何方鬼畜😋😋😋...

```
export interface AnonymousSubscription {
    unsubscribe(): void;
}
```
OMG, 没看错, unsubscribe, 这里就是用来取消订阅的, 任何传给Observable构造函数的Observe对象都将在这里取消观察订阅, 那这个Observable到底做了什么呢?加subscribe添加订阅, 同时又在结尾取消订阅..
这时候该我一脸懵逼了....

```
export interface Observer<T> {
    closed?: boolean;
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
```