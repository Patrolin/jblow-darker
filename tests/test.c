#include <stdint.h>
#include <stdio.h>
typedef uint8_t u8;
typedef uint64_t u64;

struct Foo {
  u64 n;
  const u8 *string;
};
typedef Foo Foo;  // this is why you use C++ instead, i guess

void print_foo(Foo foo) {
  printf("foo.n: %lli, foo.string: %s\n", foo.n > 0 ? foo.n : 0, foo.string);

  // builtins
  sizeof(foo);
  // NOTE: vscode doesn't parse these properly in C, therefore it is unclear how to color them correctly
  alignof(foo);
  decltype(foo);
  typeid(foo);
  noexcept(foo);
}

// NOTE: in C we have to put main() after everything else
int main() {
  Foo foo = {123, "hello world"};
  print_foo(foo);
  return 0;
}
