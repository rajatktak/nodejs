const os= require('os');

// tell os platform
console.log(os.platform());
//tells architecture
console.log(os.arch());
//
console.log(os.cpus());
// tell free memory
console.log(os.freemem());
// tell total memory
 console.log(os.totalmem());
//  tell total up time in seconds
console.log(os.uptime());