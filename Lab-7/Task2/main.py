from models import Animal, Dog, Cat

def main():
    animal1 = Animal("GenericAnimal", 5, "Unknown")
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    cat1 = Cat("Whiskers", 2, "White")

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())
        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        elif isinstance(animal, Cat):
            print(animal.scratch())
        print("-" * 40)

if __name__ == "__main__":
    main()