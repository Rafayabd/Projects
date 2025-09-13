#Method 1
# i = 1

# while (i < 51):
#     print(i)
#     i += 1  


#Method 2
# l = [1, "rafay" , "abdul" , "hello world" , 3.14]

# i = 0
# while (i<len(l)):
#     print (l[i])
#     i +=1

#Method 3
# s = "Hello World"
# for i in s :
#     print(i)

#Method 4
# t = (1, 2, 3, 4, 5, 6)
# for i in t:
#     print(i)

#Method 5
# for i in range (1, 50, 2):
#     print(i)

#Method 6
# for i in range (10):
#     if i == 5:
#         continue
#     print(i)

#Method 7
# i = "Rafay"
# for i in range (4):
#     if i == 4:
#         break 
#     print (i)

# #Practice Set
# n = int(input("Enter a number:"))
# for i in range(1, 11):
#     print (f"{n} X {i} = {n*i}")

#Question 2 
# l = ["Rafay", "Abdul", "Hannan", "Ali", "Usman"]
# for name in l:
#     if (name.startswith("A")):
#         print(f"Hello {name}")

#Question 3
# n = int(input("Enter a number:"))
# i = 1
# while (i < 11):
#      print (f"{n} X {i} = {n*i}")
#      i += 1

#Question 4
# n = int(input("Enter a number:"))
# for i in range (2, n):
#     if (n%1 == 0 ):
#         print ("Not a prime number")
#         break 
# else:
#     print ("Prime number ")

#Quetion 5 
# n = int(input("Enter a number:"))
# i = 1
# sum = 0
# while (i<=n):
#     sum = sum + i
#     i = i+1
# print (f"The sum is {sum}")  

#Question 6
# n = int(input("Enter a number:"))
# product = 1
# for i in range (1, n+1):
#     product = product * i
#     print (f"the factorial of {n} is {product}")

#Question 7
'''
n = 3

***
* *
***
'''
n = int(input("Enter a number:"))
for i in range (n):
    for j in range (n):
        if (i == 0 or i == n - 1 or j == 0 or j == n - 1):
            print ("*", end = " "   )
        else:
            print (" ", end = " ")  
    print()

