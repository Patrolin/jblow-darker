#include <stdint.h>
#include <stdio.h>
typedef uint8_t u8;
typedef uint64_t u64;

#include <typeinfo>

#define hello world

struct Foo {
  u64 n;
  const u8* string;
  u64 pointless_getter() {
    return this->n;
  }
};

void print_foo(Foo foo) {
  printf("foo.n: %lli, foo.zoo: %s\n", foo.n > 0 ? foo.pointless_getter() : 0, foo.string);

  // builtins
  sizeof(foo);
  alignof(foo);
  decltype(foo);
  typeid(foo);
  static_cast<u64>(foo.n);
  dynamic_cast<void*>(0);  // invalid code, but a proper example would be massive
  const_cast<u8*>(foo.string);
  reinterpret_cast<u64>(foo.n);
  noexcept(foo);

  auto boo = new Foo;
  delete boo;

  auto zoo = new Foo[8];
  delete[] zoo;
}

// NOTE: in C++ we have to put main() after everything else
int main() {
  Foo foo = Foo{123, "hello world"};
  print_foo(foo);
  return 0;
}
