const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const hiddenNumber = Math.floor(Math.random() * 100);
console.log(hiddenNumber);

rl.question(`Загадано число в диапазоне от 0 до 100 \n`, (userInput) => {
  if (+userInput === hiddenNumber) {
    rl.close();
  } else {
    // userInput > hiddenNumber ? rl.setPrompt(`Меньше \n`) : rl.setPrompt(`Больше \n`)
    checkInput(userInput);
    rl.prompt();
    rl.on('line', (userInput) => {
      if (+userInput === hiddenNumber) {
        rl.close();
      } else {
        // userInput > hiddenNumber ? rl.setPrompt(`Меньше \n`) : rl.setPrompt(`Больше \n`)
        checkInput(userInput);
        rl.prompt();
      }
    })
  }
});

rl.on('close', () => console.log(`Отгадано число ${hiddenNumber}`));

function checkInput(input) {
  if(!/^(0|-?[1-9]\d*)$/.test(+input)) {
    rl.setPrompt(`Некорректный ввод! \n`)
  }else {
    if (input > hiddenNumber) rl.setPrompt(`Меньше \n`);
    if (input < hiddenNumber) rl.setPrompt(`Больше \n`);
  }
}
