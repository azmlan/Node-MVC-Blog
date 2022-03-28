// fs = file system
const fs = require('fs');
console.log();

// reading files

// .readFile is async function
// fs.readFile -> with callback function

// fs.readFile('./docs/readme.txt', (err , data)=> {
// if (err){
//   console.log('error' , err);
// }
// console.log('data ' , data);

// console.log('data :' , data.toString());
// });




// writig files

// three args
// async
// replace the content in the targted file

// fs.writeFile('./docs/readme.txt', ' not lorem' , ()=>{
//   console.log('writeFile');
// });

// if the file doesnt exist it will create it

// fs.writeFile('./docs/readmeTow.txt', 'Readme Tow :' , ()=>{
//   console.log('ReadeMe Tow');
// });





// directories
//async
//callback function

// if(!fs.existsSync('./assetes')){
// fs.mkdir('./assetes', (err)=>{
//   if(err) console.log(err);
//   console.log('folder Created');
// });
// }else{
//   fs.rmdir('./assetes',(err)=>{
//     if(err) console.log(err);
//     console.log('Deleted');
//
//   });
// }




// deleteing files
// if (fs.existsSync('./docs/deleteme.txt')){
//   fs.unlink('./docs/deleteme.txt',(err)=>{
//     if(err) console.log(err);
//     console.log('File Deleted');
//   });
// }else {
//   console.log('Its not exist');
// }
