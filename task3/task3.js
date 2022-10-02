const readline = require('readline');
const fs = require('fs');
const path = require('path');
const rl = readline.createInterface(process.stdin, process.stdout);

const hiddenNumber = Math.round(1 + Math.random());

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Задайте имя файла \n`, (userInput) => {
      let file = path.join(__dirname, 'index.txt');
      if (userInput !== '') {
        file = path.join(__dirname, `${userInput}.txt`);
        resolve(file);
      } else {
        console.log((`Вы не ввели имя, ваш файл будет называться index.txt!`));
        resolve(file);
      }
    });
  });
};
const question2 = (file) => {
  return new Promise((resolve, reject) => {
    rl.question(`Загадайте, 1 или 2 \n`, (userInput) => {
      if (+userInput === hiddenNumber) {
        writeFile(file, userInput);
        resolve();
      } else {
        checkInput(userInput);
        writeFile(file, userInput);
        rl.prompt();
        rl.on('line', (userInput) => {
          if (+userInput === hiddenNumber) {
            writeFile(file, userInput);
            resolve();
          } else {
            checkInput(userInput);
            writeFile(file, userInput);
            rl.prompt();
          }
        })
      }
    });
  })
};

const main = async () => {
  const file = await question1();
  await question2(file);
  rl.close();
};

main();

rl.on('close', () => console.log(`Отгадано, это ${hiddenNumber}`));

function checkInput(input) {
  if (!/^(0|-?[1,2]\d*)$/.test(+input)) {
    rl.setPrompt(`Некорректный ввод! \n`)
  } else {
    if (input !== hiddenNumber) rl.setPrompt(`Неверно \n`);
  }
}
function writeFile(file, userInput) {
  if (fs.existsSync(file)) {
    fs.appendFile(file, `${userInput} - ${+userInput === hiddenNumber ? 'угадал' : 'не угадал'} \n`, (err) => {
      if (err) throw Error(err);
    });
  } else {
    fs.writeFile(file, `${userInput} - ${+userInput === hiddenNumber ? 'угадал' : 'не угадал'} \n`, (err) => {
      if (err) throw Error(err);
    });
  }
}
