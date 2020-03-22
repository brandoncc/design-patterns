## Decorator Pattern

According to
[Head First Design Patterns](http://shop.oreilly.com/product/9780596007126.do),
the Decorator Pattern is defined as:

> Decorator - Attach additional responsibilities to an object dynamically.
> Decorators provide a flexible alternative to subclassing for extending
> functionality.

The implementation of this is a base class instantiation being passed to an
instantiation of a wrapper class which has the same interface as the base class.
The wrapper then delegates up the chain to the object that was passed to it.

This allows us to combine returned values from each of the wrapped layers.
