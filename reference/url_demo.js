const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=00&status=active');

console.log(myUrl.href);
// get host
console.log(myUrl.host);
// host name (it dont give port no.)
console.log(myUrl.hostname);
// pathname
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// get parameters in url
console.log(myUrl.searchParams);
// add parameter

myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
// loop in parameter
myUrl.searchParams.forEach(function(value,name){
  console.log(  `${name} : ${value}`);
});
