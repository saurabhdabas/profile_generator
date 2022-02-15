const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable :", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's an activity you like doing?", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
});



// const questions = ["What's your name? Nicknames are also acceptable :","What's an activity you like doing?","What do you listen to while doing that?","Which meal is your favourite (eg: dinner, brunch, etc.)","What's your favourite thing to eat for that meal?","Which sport is your absolute favourite?","What is your superpower? In a few words, tell us what you are amazing at!"]

// const askAQuestion = function(){
//   for(let question of questions){
//     console.log(question);
//     rl.question(question, (answer) => {
//       console.log(`Thank you for your valuable feedback: ${answer}`);
//     });
//     rl.close();
//   }
// }
// askAQuestion();
// function repeatNTimes(action,num){
//   for(let i = 0 ; i < num ; i ++){
//     console.log(i);
//     action();
//   }
// }

// repeatNTimes(askAQuestion,questions.length);


