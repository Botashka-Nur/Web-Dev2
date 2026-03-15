N = int(input())
A = list(map(int, input().split()))
count = 0
for i in range(1, N):
    if A[i] > A[i-1]:
        count += 1
print(count)