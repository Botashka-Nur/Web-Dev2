def merge_the_tools(s, k):
    for i in range(0, len(s), k):
        t = s[i:i+k]
        seen = set()
        out = ''
        for c in t:
            if c not in seen:
                out += c
                seen.add(c)
        print(out)

s = input()
k = int(input())
merge_the_tools(s, k)