N = int(input())
A = list(map(int, input().split()))
for i in range(N // 2):
    A[i], A[N - 1 - i] = A[N - 1 - i], A[i]
for x in A:
    print(x, end=' ')