#!/usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

let date = new Date();
let resultDate = date.toISOString();
if (argv.y) resultDate = new Date(date.setFullYear(date.getFullYear() - argv.y));
if (argv.year) resultDate = new Date(date.setFullYear(date.getFullYear() - argv.year));
if (argv.m) resultDate = new Date(date.setMonth(date.getMonth() - argv.m));
if (argv.month) resultDate = new Date(date.setMonth(date.getMonth() - argv.month));
if (argv.d) resultDate = new Date(date.setDate(date.getDate() - argv.d));
if (argv.date) resultDate = new Date(date.setDate(date.getDate() - argv.date));

console.log(resultDate);