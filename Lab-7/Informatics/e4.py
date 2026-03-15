N = int(input())
A = list(map(int, input().split()))
for i in range(1, N):
    if A[i] * A[i-1] > 0:
        print("YES")
        break
else:
    print("NO")