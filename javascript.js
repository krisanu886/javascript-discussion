// function nameIterator(values){
//     let nameIndex = 0;
//     return{
//         next:function(){
//             if(nameIndex<values.length){
//                 return{
//                     value:values[nameIndex++],
//                     done:false
//                 }
//             }
//             else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }
// const myArray=["Sidharth","Poonam","Manjari","Kanhaiya"];
// console.log(myArray);
// const name = nameIterator(myArray);
// alert(name.next().value);
// alert(name.next().value);
// alert(name.next().value);
// alert(name.next().value);
// alert(name.next().value);
// for(items of myArray){
//     document.write(items);
// }