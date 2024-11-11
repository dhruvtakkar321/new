// function simple_Func(){
//     console.log("Hello World")
// }
// console.log(simple_Func());

// const simple_Func2 =() => {
//     console.log("Hello world");

// }
// console.log(simple_Func2())

// var user = {
//     name:"Rahul",
//     profession:"Teacher",
//     hobbies:["reading", "dancing"]
// }
// console.log(user.name,user.profession,user.hobbies[0],user.hobbies[1]);
// console.log(user.profession)
// console.log(user.hobbies[0])
// console.log(user.hobbies[1])
const body = {
    height:143,
    weight:32,
}
const brain={
    iq:1
}
const person={
    ...body,
...brain,
name:"dhruv",
}
console.log(person);