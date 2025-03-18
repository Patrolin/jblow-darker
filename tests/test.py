from utils import printf

class Foo:
	n: int
	string: str
	def __init__(self, n: int, string: str):
		self.n = n
		self.string = string
	def pointless_getter(self):
		return self.n

def print_foo(foo: Foo):
	printf("foo.n: %v, foo.str: %v\n", foo.pointless_getter() if foo.n > 0 else 0, foo.string)
	# builtins
	len([])
	abs(1)
	min(1, 2)
	max(1, 2)
	range(1)
	iter([])

if __name__ == '__main__':
	foo = Foo(123, "hello world")
	print_foo(foo)
