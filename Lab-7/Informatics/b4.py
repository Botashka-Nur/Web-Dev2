N = int(input())
A = list(map(int, input().split()))
for x in A:
    if x % 2 == 0:
        print(x, end=' ')