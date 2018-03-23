console.log('starting app');

const fs = require('fs'); // write a file 
const os = require('os'); // info about user
const _=require('lodash'); // require lodash of npm install
const yargs = require('yargs');

const notes = require('./notes.js'); // require the file notes.js

const argv = yargs.argv;

var command = process.argv[2];
console.log('Command', command)
console.log('Process',process.argv)
console.log('Yargs', argv)

if(command === 'add'){
  console.log('adding new note')
}else if (command === 'list'){
  console.log('listing all notes')
}else if (command === 'read'){
  console.log('Reading note')
} else if(command === 'remove') {
  console.log('Removing note')
} else {
  console.log('command no recognized')
}

//console.log(process.argv)


// install yargs@4.7.1







//var filtereArray = _.uniq(['Galan']);
//console.log(filtereArray);

// install nodemon is a web service for run the servers 
// npm nodemon file.js

//console.log(_.isString('men'))


//console.log('Result', notes.add(9, -2))

//var user = os.userInfo(); // info about user


//var res = notes.addNote();
//console.log(res)




//fs.appendFile('greetings.txt', 'Hello'+ user.username);


/*
Best
fs.appendFile('greetingsss.txt', 'Hello'+ user.username, err => {
  if(err){
    console.log('Unable to write to file')
  }
})
*/
/*
fs.appendFile('Yo.txt', ` Hello  ${user.username} You are ${notes.age}`, err => {
  if(err){
    console.log('Unable to write to file')
  }
})
*/

//fs.appendFileSync('greed.txt', 'Hola mundo');
