// Write your solution in this file!
function updateEmployeeWithKeyAndValue(object,employee,key){
    const Obj={...object};
    Obj[key]=employee;
    // const value={
    //     name: 'Brian',
    //     streetAddress: 'Mubiru road'
    // };
    return Obj;
}
const values = {
    location: {
      name: "Brian",
      streetAddress: "Mubiru Road",
      
    },
  };
  
  const val = updateEmployeeWithKeyAndValue(values);
   console.log(val)

// dsUpdate
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,object){
 object[key]=employee;
    return object;
 } 
 const employee1 = {
    location: {
      name: "Brian",
      streetAddress: "Mubiru Road",
      
    },
  };
  const val1 = destructivelyUpdateEmployeeWithKeyAndValue(employee1,'Brian','Mubiru Road');
   console.log(val1)

//    destraction

   function deleteFromEmployeeByKey(employee2,key,object){

    const Obj={...object};
    Obj[key]=employee2;
 } 
 const val2= {
    location: {
      name: "Brian",
      streetAddress: "Mubiru Road",
      
    },
  };
  const vall2 = deleteFromEmployeeByKey(val2,'Brian','Mubiru Road');
   delete employee2;
   console.log(val2)


   