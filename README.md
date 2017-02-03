# Extend JavaScript classes in base of Ruby methods

## Array

### .first()

Returns the first element of the array. If the array is empty, the first form returns `undefined`. See also [#last](#last) for the opposite effect.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.first(); #=> `a`
```

### .last()

Returns the last element of self. If the array is empty, the first form returns `undefined`.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.last(); #=> 'd'
```

### .empty()

Returns true if self contains no elements.

```JavaScript
[].empty() #=> true
```

### .clear()

Removes all elements from self.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.clear(); #=> []
```

### .size()

Alias for `.length`.

### .sample()

Choose a random element or n random elements from the array.

If the array is empty the first form returns `undefined`.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.sample(); #=> 'c'
```

### .compact()

Returns a copy of self with all `undefined` or `null` elements removed.

```JavaScript
var dummy = ['a', undefined, null, 'd'];
dummy.compact(); #=> ['a', 'd']
```

### .include()

Returns `true` if the given object is present in self (that is, if any element === object), otherwise returns `false`.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.include('b') #=> true
```

### .take()

Returns first n elements from the array.

```JavaScript
var dummy = ['a', 'b', 'c', 'd'];
dummy.take(2) #=> ['a', 'b']
```

## Number

### .times()

Iterates the given block int times, passing in values from zero to int - 1.

```JavaScript
(5).times(function (i) {
  console.log(i);
});
#=> 0 1 2 3 4 
```

### .upto()

Iterates the given block, passing in integer values from int up to and including limit.

```JavaScript
(1).upto(5, function (i) {
  console.log(i);
});
#=> 1 2 3 4 5
```

### .downto()

Iterates the given block, passing decreasing values from int down to and including limit.

```JavaScript
(5).downto(1, function (i) {
  console.log(i);
});
#=> 5 4 3 2 1
```