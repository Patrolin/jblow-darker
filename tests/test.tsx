import { encodeQuery, hello, printf } from "./utils.ts";

function main() {
  let foo: Foo = { n: 123, str: "hello world" };
  print_foo(foo);

  let far = new Far(456, "foobar");
  far.print();
  typeof foo === "string";
  foo instanceof String;
  "str" in foo;
}
main();

// basics
type Foo = {
  n: number;
  str: string;
};
function print_foo(foo: Foo) {
  printf("foo.n: %v, foo.str: %v\n", foo.n > 0 ? foo.n : 0, foo.str);
}

// extras
interface Boo extends Foo {}
class Bar {}
class Far extends Bar {
  n: number;
  str: string;
  constructor(n: number, str: string) {
    super();
    this.n = n;
    this.str = str;
  }
  print() {
    print_foo({ n: this.n, str: this.str });
  }
}

const obj = { key: "value" } as Record<string, string>;
delete obj["key"];
const type = typeof obj;
type Obj = keyof typeof obj;

// edge cases
const row = { type: "foo" };
const path = `/path?${encodeQuery({
  type: [row.type, 1 + 1, `hello: ${hello()}`],
})}`;
const name = `${[].length}`;
