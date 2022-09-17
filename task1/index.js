#!/usr/bin/env node

const yargs = require('yargs');
const { addDate }= require('./add');
const { subDate }= require('./sub');
const { currentDate }= require('./current');

let date = new Date();

yargs.command({
  command: 'current',
  describe: 'Вывести текущую дату',
  handler() {
    console.log(currentDate(date));
  }
});

yargs.command({
  command: 'add',
  describe: 'Получить дату в будущем',
  handler() {
    console.log(addDate(date));
  }
});

yargs.command({
  command: 'sub',
  describe: 'Получить дату в будущем',
  handler() {
    console.log(subDate(date));
  }
});

yargs.parse();