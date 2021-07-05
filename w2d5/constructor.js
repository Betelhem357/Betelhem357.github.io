String.prototype.filter = function (strs) {
    //console.log(strs.length);
    let val = this.valueOf();// i got challenge on getting the exact value of the string
    strs.forEach(element => {
        if (this.includes(element)) {
            val = val.replace(element, "");
        }
    });
    return val;
}
//console.log("This house is not nice!".filter(['not']));

Array.prototype.BubbleSort = function () {
    let val=this.slice();
    for(var i = 0; i < val.length; i++){
    
        for(var j = 0; j < ( val.length - i -1 ); j++){
          if(val[j] > val[j+1]){
            var temp = val[j]
            val[j] = val[j + 1]
            val[j+1] = temp
          }
        }
      }
    return val;
}
console.log([6,4,0, 3,-2,1].BubbleSort());

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teaches = function(subject)
{
 console.log(this.name + "is now teaching"+ subject);
 return this.name + " is now teaching "+ subject;
}
var myTeacher = new Teacher();
myTeacher.initialize("Michael",40);// I don't know your age sorry just a guess
myTeacher.teaches("WAP");
