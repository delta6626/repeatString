# repeatString.js
A simple utility library to repeat a string a given number of times with options for delimiter and padding. 
# Installation
You can install `repeatString` via npm or yarn (Note that the package is named advanced-repeat-string because repeat-string was already taken on npm):

```npm install advanced-repeat-string```

or

```yarn add advanced-repeat-string```

# Usage

```function repeatString(str, count = 0, delimiter = '', padding = '')```

This function repeats a string a given number of times. It supports customizable delimiters and padding.

__Parameters:__
- `str (String)` The string to repeat
- `count (Number, default 0)` Number of times `str` is to be repeated
- `delimiter (String, default '')` The string to isert betwen repetitions
- `padding (String, default '')` The padding to add before the repeated string

__Returns:__
- The repeated string, potentially with delimiter and padding.

# Examples

1. Basic repetition:
   ```
   const repeatString = require('advanced-repeat-string');
   console.log(repeatString('abc', 3));
   // Output: "abcabcabc"
   ```
   
2. Repetition with a Delimiter:
   ```
   console.log(repeatString('abc', 3, '-')); 
   // Output: "abc-abc-abc"
   ```

3. Repetition with padding before:

   ```
   console.log(repeatString('abc', 3, '-', '   '));
   // Output: "   abc-abc-abc"
   ```

4. Edge case with `count = 0`:

   ```
   console.log(repeatString('abc', 0));
   // Output: ""
   ```
   
6. Edge case with negative `count`:

   ```
   console.log(repeatString('abc', -3));
   // Output: ""
   ```

# Contributing

All contributions are welcome and appreciated. Feel free to open issues or pull requests with improvements, bug fixes, or new features.