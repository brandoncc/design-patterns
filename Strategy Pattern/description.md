## Strategy Pattern

According to
[Head First Design Patterns](http://shop.oreilly.com/product/9780596007126.do),
the Strategy Pattern is defined as:

> Strategy - defines a family of algorithms, encapsulates each one, and makes
> them interchangeable. Strategy lets the algorithm vary independently from the
> clients that use it.

The ideal way to achieve this is by creating a class or other encapsulation of a
behavior, and then passing an instance of that behavior to the collaborator
(main) object. This is often done using a setter method.

The collaborator then delegates to the strategy object, without knowing any of
the implementation details of the strategy.
