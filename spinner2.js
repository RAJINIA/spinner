let array = ['\r|', '\r/', '\r-', '\r\\', '\n']

for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, i * 500)
}






//setInterval(interval(), 1000);

// function interval(array) {
//   for (const time of array) {
//     process.stdout.write(time);
//   }
// }


  
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  '); 
// }, 700);