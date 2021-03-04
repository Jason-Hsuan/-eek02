function avg(data){
    var length=data["count"];
    var employees_data =data["employees"];
    var sum=0;
    for(var i = 0; i <length; i++){
      sum=sum + employees_data[i]["salary"];
      ave_sum=sum/length
    }
      console.log(ave_sum);
  };
  
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
  
  