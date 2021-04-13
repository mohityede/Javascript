# Function
# def squre(x):
#     return x*x;

# Object oriented programming
class Point():
    def __init__(self, input1, input2):
        self.x = input1
        self.y = input2

p = Point(2,7)

print(p.x)
print(p.y)

class Class():
    def __init__(self, classCap):
        self.classCap = classCap
        self.student = []

    def add_student(self, name):
        if self.remain_seats() == 0:
            return False
        self.student.append(name)
        return True

    def remain_seats(self):
        return self.classCap - len(self.student)

f = Class(3)
people = ["mohit","rohit","ram","shyam"]
for i in people:
    success = f.add_student(i)
    if success:
        print(f"person {i} added succesfully.")
    else:
        print(f"NOt seat available for {i}.")