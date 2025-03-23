import {printf} from "./utils.ts"

function main() {
	let foo: Foo = {n: 123, str: "hello world"};
	print_foo(foo);
  let bar = new Bar(456, "foobar");
  bar.print();
}
main();

// basics
type Foo = {
  n: number;
  str: string;
}
function print_foo(foo: Foo) {
  printf("foo.n: %v, foo.str: %v\n", foo.n > 0 ? foo.n : 0, foo.str)
}

// extras
interface Boo extends Foo {}
class Bar {}
class Far extends Bar {
  n: number;
  str: string;
  constructor(n: number, str: string) {
    this.n = n;
    this.str = str;
  }
  print() {
    print_foo({n: this.n, str: this.str});
  }
}
