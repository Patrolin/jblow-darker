package main
import "core:fmt"

main :: proc() {
	foo := Foo{123, "hello world"}
	print_foo(foo)
	inline_function(true)
}

// basics
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

// extras
c_file :: #load("test.c")
inline_function :: #force_inline proc(condition: bool, loc := #caller_location) {
	assert(condition, loc = loc)
}
