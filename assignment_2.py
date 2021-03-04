def avg(data):
    employees_data = data["employees"]
    length=data["count"]
    sum=0
    for i in employees_data :
        employees_salary=i["salary"]
        sum+=employees_salary
    ave_sum=sum/length
    print(ave_sum)

avg({"count":3, "employees":[
{
"name":"John",
"salary":30000 },
{
"name":"Bob",
"salary":60000 },
{
"name":"Jenny",
"salary":50000 }]})

