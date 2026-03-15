N = int(input())
A = list(map(int, input().split()))
count = 0
for x in A:
    if x > 0:
        count += 1
print(count)