// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// // createServer with callback function
// // it run every time run the req  comes to the server
// const server = http.createServer((req, res) => {
//   // losash
//   const num = _.random(0, 20);
//   console.log(num);

//   const greet = _.once(() => {
//     console.log("hello");
//   });
//   greet();
//   greet();
//   // console.log(req.url , req.method );
//   // console.log(req);
//   // set header type :

//   // res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   // res.write('<h1>Hello ninjas</h1>');
//   // res.write('<code>Im a good ninja</code>');
//   let path = './views/';
//   switch (req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;



//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;

//     case '/tt':
//       path += 'tt.html';
//       res.statusCode = 200;
//       break;

//     // redirect to about url
//     case '/about-me':
//       res.statusCode = 301;
//       res.setHeader('Location', 'about');
//       res.end();
//       break;

//     default:
//       path += '404.html';
//       res.statusCode = 404;
//       break;
//   }
//   // send html file
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       // res.write(data);
//       // i can send the data inside a .end()
//       // if i just send one thing
//       // res.end(data);
//       res.end(data);
//     }
//   });
// });

// // 3 args and callback function
// server.listen(3000, 'localhost', () => {
//   console.log('listining for req on port 3000');
// });
