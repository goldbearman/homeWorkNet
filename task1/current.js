#!/usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;


function currentDate(date) {
  let resultDate = date.toISOString();
  if (argv.y || argv.year) resultDate = date.getFullYear();
  if (argv.m || argv.month) resultDate = date.getMonth();
  if (argv.d || argv.date) resultDate = date.getDate();
  return resultDate;
}

module.exports = {currentDate};
