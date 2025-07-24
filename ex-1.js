// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000 ;
}

function forEach(array, operation) {
  // Start coding here
  let newSalary = [];
  for(let i in array){
    newSalary.push(operation(array[i]));
  }
  return newSalary
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries,addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function? 
  //addSalary5000 จุดสังเกตคือ บรรทัดที่20 ถูก forEach เรียกใช้งาน

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
  //forEach จุดสังเกตคือ บรรทัดที่20 ใช้เรียกใช้งานฟังก์ชั่นอื่น
====================================
*/
