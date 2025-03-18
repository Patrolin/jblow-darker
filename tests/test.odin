package main
import "core:fmt"

main :: proc() {
	foo := Foo{123, "hello world"}
	print_foo(foo)
}

Foo :: struct {
	n:   u64,
	str: string,
}
print_foo :: proc(foo: Foo) {
	fmt.printfln("foo.n: %v, foo.str: %v", foo.n > 0 ? foo.n : 0, foo.str)
	// builtins
	_ = size_of(Foo)
	_ = align_of(Foo)
}
