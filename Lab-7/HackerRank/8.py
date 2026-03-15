def capitalize_name(name):
    return ' '.join(word.capitalize() for word in name.split())

name = input()
print(capitalize_name(name))