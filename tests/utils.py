
from typing import Any

def sprintf(fmt: str, *args: Any) -> str:
  start = 0
  end = 1
  acc = ""
  arg_i = 0
  while end < len(fmt):
    if fmt[end-1] == "%" and fmt[end] == "v":
      acc += fmt[start:end-1]
      acc += str(args[arg_i])
      arg_i += 1
      start = end + 1
    end += 1
  acc += fmt[start:]
  return acc

def printf(fmt: str, *args: Any):
  print(sprintf(fmt, *args), end = '')
