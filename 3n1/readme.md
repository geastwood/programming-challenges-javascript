## 3n + 1

1. input n

2. print n

3. if n = 1 then STOP

4. 		 if n is odd then n = 3 * n + 1

5. 		 else n = n / 2

6. GOTO 2

Given the input 22, the following sequence of numbers will be printed `22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1`

Given an input n, it is possible to determine the number of numbers printed (including the 1). For a given n this is called the `cycle-length` of n. In the example above, the `cycle length` of `22` is `16`.

For any two numbers i and j you are to determine the maximum `cycle length` over all numbers between i and j.

## Sample Input

1 10
100 200
201 210
900 1000

## Sample Output

1 10 20
100 200 125
201 210 89
900 1000 174
