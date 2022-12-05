## Correctness

I couldn't run the program in my console because of the following issues.

- On line 5 you added an unnecessary <T> next to the function name and in the params types (string: T, shift: string) the types are incorrect. The function should be adjusted to the following code.

```
const caesar_cipher = (string: string, shift: number) => {...}
```

- On last line you have written code `print(caesar_cipher);` instead of `console.log(caesar_cipher);`

## Efficiency

- On line 7 you declare the below code. You should declare the type of the variable.

#### Incorrect

```
 const alphabet: Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
```

#### Correct

```
 const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
```

## Style

- For your specific use case I would have recommended a for loop as it iterates the quickest and shortens the lines of code written.

## Documentation

- Thank you for the comments in the code. It made things very easy to read and understand. Thanks for preparing the file clearly and cleanly.
