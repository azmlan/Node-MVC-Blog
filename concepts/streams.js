const fs = require('fs');


// first arg
// where do we want to {read or pass} data from
//secode arg
//specifie the encoding

const readStream = fs.createReadStream('./docs/largeFile',{encoding:'utf8'});
//createWriteStream creates a new file if it not exist
const writeStream= fs.createWriteStream('./docs/writeStream');
//
// readStream.on('data',(junk)=>{
//   console.log('-----NEW CHUNK----');
//   console.log(junk);
//   writeStream.write('\n NEW JUNK \n')
//   writeStream.write(junk);
// });

// using pipe  , it have to be readable file to pass to wrtiabel file
readStream.pipe(writeStream);
