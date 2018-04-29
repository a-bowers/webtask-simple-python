import sys
from math import sqrt

def Fibonacci(n):
    rtFive = sqrt(5)
    return ((1 + rtFive)**n - (1 - rtFive)**n)/(rtFive*2**n)

for i in range(int(sys.argv[1]), int(sys.argv[2])):
    print Fibonacci(i)
