We want to test:

all keywords/special tokens - white
names/types/types in function definitions - default gray
numbers - number green
strings - string green
comments - comment green

Therefore, in each language we will:
1) Import something
2) Define a new struct `Foo :: {n: u64; str: string}`
3) In main(): Create a new `foo: Foo = {123, "hello world"}` and call print_foo(foo)
4) In print_foo(foo: Foo): Print the number and string fields of the struct separately
5.1) Use a ternary expression (should be colored with default gray)
5.2) Write a example comment (should be colored with comment green)
5.3) Do language-specific stuff (if applicable)
  - Create and call a method
  - Call a builtin function
  - Use special keywords (`#include`, `new`, `#load()`, ...)
