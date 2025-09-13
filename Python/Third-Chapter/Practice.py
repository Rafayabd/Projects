name = 'Rafay'
# print(name[-5:-1])
# print(name[-5:])
# print(len(name))
# print(name.endswith('y'))
# print(name.count('y'))
# print(name.capitalize())
# print(name.startswith('Raf'))

# name = input("Enter your name: ")
# print(f"Good Afternoon {name} ")


letter = '''Dear <|NAME|>,
You are selected! <|DATE|> '''
print(letter.replace("<|NAME|>", name).replace("<|DATE|>", "20th June 2023"))

name = "Rafay is a good boy"
print(name.find("  "))