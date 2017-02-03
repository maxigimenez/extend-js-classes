# Extend JavaScript classes in base of Ruby methods

## Array

### .first()

Returns the first element of the array. If the array is empty, the first form returns `undefined`. See also [#last](#last) for the opposite effect.

```
var dummy = ['a', 'b', 'c', 'd'];
dummy.first(); #=> `a`
```

### .last()

Returns the last element of self. If the array is empty, the first form returns `undefined`.

```
var dummy = ['a', 'b', 'c', 'd'];
dummy.last(); #=> 'd'
```

### .empty()

Returns true if self contains no elements.

```
[].empty() #=> true
```

### .clear()

Removes all elements from self.

```
var dummy = ['a', 'b', 'c', 'd'];
dummy.clear(); #=> []
```

### .size()

Alias for `.length`.

### .sample()

Choose a random element or n random elements from the array.

If the array is empty the first form returns `undefined`.

```
var dummy = ['a', 'b', 'c', 'd'];
dummy.sample(); #=> 'c'
```

### .compact()

### .include()

### .take()

## Number

### .times()

### .upto()

### .downto()