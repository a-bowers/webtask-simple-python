# webtask-simple-python
A simple python compiler for [webtask.io](https://webtask.io/), which allows basic python scripts (no third-party modules) to be run as webtasks using [python-shell](https://www.npmjs.com/package/python-shell). Use by adding webtask-simple-python as a dependancy in your package.json and setting the wt-compiler meta property at webtask creation:
```
wt create foo.py --meta wt-compiler=webtask-simple-python/compile
```

Arguments can be passed to the python script using the query string "args" parameter, for example:
```webtaskURL/webtaskName?args=10``` or ```webtaskURL/webtaskName?args=Hello%20World!&args=20```

Everything sent to stdout while the python script runs is returned once execution is complete.
