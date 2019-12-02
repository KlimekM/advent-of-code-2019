import * as fs from 'fs'

export const convertTxtFileToArray = (day: string): number[] =>
  // read the text file, convert it to a string, split it on a new line,
  // remove the last new line at end of file, convert entries to a number.
  fs.readFileSync(`src/${day}/input.txt`).toString().split('\n').slice(0, -1).map(str => parseInt(str, 10));
