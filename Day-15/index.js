let students = {name : "Ali" , age :  20}
// crud practice 

//create
students.grade = "A"
students.passed = true

//Read
console.log(students)
console.log(students["name"])

//update
students.grade = "B"
console.log(students)

// delete
delete students.age
console.log(students)

// Nested 

let classroom = {
    teacher : {
        name : "MS Sara",
        Subject : "Math"
    },
    students : [
        {name : "Ahmed" , Grade : "A"},
        {name : "Rahma" , Grade : "b"},
        {name : "Farah" , Grade : "c"}
    ]
}
console.log(classroom.teacher.name)
for (let index = 0; index < classroom.students.length; index++) {
    classroom.students[index].passed= true 
}
console.log(classroom);
console.log(classroom.students[0].name)

console.log("we are checking");


for (let key in classroom){
   console.log("Keys" , key)
}
   
// object methods 
const student =  {
    namer : "Hana",
    age : 100,
    great : function  (){
      console.log(`hi , I am ${this.namer}`);
    }
}
student.great()

// object Destruction
const {namer : studentNmae , age : studentAge}= student
console.log(studentAge);
console.log(studentNmae);

const classroom1 = {
    student1 : {name1 : "Hana Adam" , age: 90 },
    teacher1 : {name1 : "Ahmed Adam" , age: 80 }
}
const {teacher1 : {name1 : TeacherName}, student1 : {name1 : studentName1}} = classroom1
console.log(TeacherName);
console.log(studentName1);


const data = [
    {name : "Hana" , age : 90},
    {name : "Omer" , age : 100}
]

const[{name :FirstName} , {age : Myage}] = data
console.log(FirstName , Myage);

const func = ({name , age})=>{
  console.log(`Hi my name is ${name} and my age is ${age}`)
}
func(data)

const stud = {name : "Amal" , age : 34}
const {name , ...rest} = stud
console.log(rest);
