class Animal:
    def __init__(self, name, age, kind):
        self.name = name
        self.age = age
        self.kind = kind

    def speak(self):
        return "Some sound"

    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.kind}"

    def __str__(self):
        return f"Animal({self.name}, {self.age}, {self.kind})"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, kind="Dog")
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}"

    def __str__(self):
        return f"Dog({self.name}, {self.age}, {self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, kind="Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} scratches the furniture!"

    def __str__(self):
        return f"Cat({self.name}, {self.age}, {self.color})"