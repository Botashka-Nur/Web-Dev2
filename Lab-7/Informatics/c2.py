import math

def even_numbers():
    a = int(input())
    b = int(input())
    for i in range(a, b + 1):
        if i % 2 == 0:
            print(i, end=' ')
    print()

def remainder_numbers():
    a = int(input())
    b = int(input())
    c = int(input())
    d = int(input())
    for i in range(a, b + 1):
        if i % d == c:
            print(i, end=' ')
    print()

def squares():
    a = int(input())
    b = int(input())
    for i in range(a, b+1):
        if math.isqrt(i)**2 == i:
            print(i, end=' ')
    print()

def sum_of_digits():
    x = int(input())
    print(sum(int(d) for d in str(x)))

def reverse_number():
    x = input()
    print(int(x[::-1]))

def count_digit():
    x = input()
    d = input()
    print(x.count(d))

if __name__ == "__main__":
    even_numbers()
    remainder_numbers()
    squares()
    sum_of_digits()
    reverse_number()
    count_digit()