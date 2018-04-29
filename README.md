# webtask-simple-python
A simple python compiler for webtask.io, which allows basic python scripts (no third-party modules) to be run as webtasks. Use by setting the wt-compiler meta property at webtask creation:
```
wt create foo.py --meta wt-compiler=webtask-simple-python/compile
```
Arguments can be passed to the python script using the query string with the "args" parameter.
