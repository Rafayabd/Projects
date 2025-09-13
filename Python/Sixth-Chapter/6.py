# a = int(input('Enter you age:'))

# if(a>17):
#     print ("You are under age")
# elif(a<0):
#     print("You are not born yet")
    
# else:
#     print("You are adult")


#task 2 
# a = int(input("Enter your age:"))
# if(a==18 ):
#     print("yes")
# else:
#     print("no")

#task 3

# a1 = int (input("Enter the greatest number:"))
# a2 = int (input("Enter the greatest number:"))
# a3 = int (input("Enter the greatest number:"))
# a4 = int (input("Enter the greatest number:"))


# if(a1>a2 and a1>a3 and a1>a4):
#     print ("a1 is the greatest number")
# elif(a2>a1 and a2>a3 and a2>a4):
#     print("a2 is the greatest number")
# elif (a3>a1 and a3>a2 and a3>a4 ):
#     print("a3 is the greatest number")
# elif (a4>a1 and a4>a2 and a4>a3):
#     print("a4 is the greatest number") 

#task 3

# marks1 = int(input("Enter your marks:")) 
# marks3 = int(input("Enter your marks:")) 
# marks2 = int(input("Enter your marks:"))

# total_percentage =  (100*(marks1 + marks2 + marks3))/300

# if(total_percentage>=40 and marks1>=33 and marks2>=33 and marks3>=33):
#     print("You are pass", total_percentage)
# else:
#     print("You are fail", total_percentage)

#task 4
# p1 = "Make a lot of money"
# p2 = "Click this link"
# p3 = "Subscribe this"
# p4 = "Buy this product"

# message = input("Enter your comment:")

# if ((p1 in message)  or (p2 in message) or (p3 in message) or (p4 in message)):
#     print("This is a spam message") 
# else:
#     print("This is not a spam message")

#task 5
# username = input("Enter your username:")
# if(len(username)<10):
#     print ("Access granted")
# else:
#     print("Access denied") 

#task 6
# l = ["Rafay", "Ali", "Hassan", "Hussain"] 
# name = input("Enter your name:")
# if(name in l):
#     print("Your name is present in the list")
# else:
#     print("Your name is not present in the list")  

#task 7

# marks = int(input("Enter your marks:"))
# if(marks>=90):
#     print ("Your grade is A+")
# elif(marks>=80):
#     print ("Your grade is A")
# elif(marks>=70):
#     print("Your grade is B+")
# elif (marks>=60):
#     print("Your grade is B")


#task 8 

post = input("Enter your comment:")

if("Rafay".lower() in post.lower()):
    print ("this post is talking about rafay")
else:
    print("this post is not talking about rafay")    
