console.log("Hello World");
// alert("Supawit");

var name = "Supawit"; //string
let Age = 20; //int

console.log("My name is " + name);

name = [5,6,7];
name[0] = 10;
name[2] = "Pleum";

document.getElementById("content").innerHTML = name;

// {"key":"value"}
// users{ {"name":"Pleum"},{"name":"Bake"} }
var users = '{"name":"Pleum","name":"Bake"}';
var json = JSON.parse(users);
console.log(json);

emp = { name : "AA", name : "BB", name : "CC" };
console.log(emp);
console.log(emp.name);

if(name != 5){
    console.log("True");
}else{
    console.log("FAlse, name is 5");
}

for(i =1; i<5 ; i++){
    console.log(1);
}

console.log(Add(5,3));
function Add(A,B) {
    c = A + B;
    return c;
}