// let data = {
//   data: [
//     {
//       node1: [{ paramter1: "xxxx" }]
//     }
//   ]
// };

// 'node1.{paramter1}'

// function box(){
//   var arr = [];
//   for(var i=0;i<5;i++){
//       arr[i] = (function(i){
//           // return function(){ return i;};                            
//           return () => i;    
//       }(i));                                        
//   }                                            
//   return arr;
// }

// console.log(box()[2]());

// var data = {};
// console.log(data.isclick);
// if(!data.isclick) {
//     console.log('!==');
// }else {
//     console.log('===');
// }

// function formatDate(date) {
//     let dateString = ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2) + date.getFullYear();

//     return dateString;
// }

// console.log(formatDate(new Date()));

// let index = 'alexqinaaaa@witsamerica.com'.indexOf('@');
// let s = 'alexqin@witsamerica.com'.slice(0, index);
// let ss = 'alexqinaaaa@witsamerica.com'.substring(0, index);
// console.log(ss);

// let alias = `alex@qq.com_course/title_activity#title_*20180808`;
// 		['/', '@', '#', '*'].forEach(item => {
// 			alias = alias.replace(item, '');
//         });
        
//         console.log(alias);

let arr = [1, 1, 3, 3, 9, 5, 5, 7, 7];
let result = 0;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index] ^ result;
    result = element
}

console.log(result);
