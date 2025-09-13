# #Functions
# '''This is a sample function to calculate factorial of a number

# factorial 0 = 0
# factorial 1 = 1
# factorial 2 = 2*factorial(1) = 2*1 = 2
# factorial 3 = 3*factorial(2) = 3*2 = 6
# factorial 4 = 4*factorial(3) = 4*6 = 24
# factorial 5 = 5*factorial(4) = 5*24 = 120

# '''





# def factorial (n):
#     if (n==0 or n==1):
#         return 1
#     return n*factorial(n-1)
    
# n = int(input("Enter a number: "))
# print (f"The factorial of {n} is {factorial(n)}")

#Problem 2
# a = 10 
# b = 20 
# c = 30

# def greatest (a,b,c):
#      if (a>b and a>c):
#        return a
#      elif (b>a and b>c):
#          return b
#      else: (c>a and c>b)
#      return c
     
# a = 10
# b = 20
# c = 30
     
# print (greatest (a,b,c))

#Program 3 

# def f_to_c(f):
#     c = (f-32)*5/9
#     return c
# f = int(input("Enter the temperature in farenhiet:"))
# print (f"The temperature in celsius is:")
# print (f"{round(f_to_c(f),2)} °C")    


#Program 4

# print (1)
# print (2)
# print (3, end="")
# print (4, end="")


# #Program 5 
# '''
# sum of n natural numbers
# sum(1) = 1
# sum(2) = 1+2
# sum(3) = 1+2+3
# sum(4) = 1+2+3+4
# sum(n) = n + sum(n-1)


# '''
# def sum_n(n):
#     if n==1:
#         return 1
#     return n + sum_n(n-1)
# n = int(input("Enter a number: "))
# print (f"The sum of first {n} natural numbers is {sum_n(n)}")

# #Program 6
# def Pattern(n):
#     if n==0:
#         return 
#     print('*'*n)
#     Pattern (n-1)
    

# Pattern(7)


#Program 7
def inch_to_cms(inch):
    cms = inch * 2.54
    return cms
inch = float(input("Enter the length in inches:"))
print (f"The length in cms is {inch_to_cms(inch)}")