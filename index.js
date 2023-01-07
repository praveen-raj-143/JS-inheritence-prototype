// let parent={
//     name : "praveen",
//     age : 23
// }

// let child={
//     name:"raj"
// }

// child.__proto__=parent
// console.log(child.age);

class Person {
    constructor() {
      this.gender = 'male';
    }
    printPerson() {}
  }
  class User extends Person {
    constructor() {
      super();
      this.name = 'praveen';
    }
    printUser() {}
  }
  var count = new User();
  console.log(count); 

// let Parentobj={
//     calAge:function(){
//         console.log(`${this.fname} ${this.lname} ${this.age}`)
//     }
// }
// const childobj=Object.create(Parentobj);
// childobj.fname="praveen"
// childobj.lname="raj"
// childobj.age="23"

// childobj.calAge()

// Object.prototype.surname="James"

//         let Grandfather={
//         name:"Joe"
//         }

//         let Father=Object.create(Grandfather)
//         Father.name="John"
//         Father.id="2"
        
//         let child=Object.create(Father)
//         console.log(child.name)
//         console.log(child.surname)
//         console.log(child.id)

// let childObj ={
//     count : function(arr){
//         let count =0;

//         for(i=0; i<arr.length; i++){
//             count+=arr[i];
//         }
//         console.log(count)
//     }
// }

// childObj.count([1,2,3,4,5,6,])

// let obj ={
//     name : "praveen",
//     age : "23"
// }

// let result = Object.keys(obj);
// console.log(result);