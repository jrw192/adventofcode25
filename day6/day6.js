"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day6.txt', 'utf8');
    var rawLines = input.split('\n');
    var lines = [];
    for (var _i = 0, rawLines_1 = rawLines; _i < rawLines_1.length; _i++) {
        var line = rawLines_1[_i];
        var formatted = line.trim().split(' ').filter(function (v) { return v !== ''; });
        lines.push(formatted);
    }
    console.log(lines);
    var ans = 0;
    var opLine = lines[lines.length - 1];
    for (var i = 0; i < opLine.length; i++) {
        var op = opLine[i];
        switch (op) {
            case '*':
                var product = 1;
                for (var j = i; j < lines.length - 1; j++) {
                    var line = lines[j];
                    product *= Number(line[i]);
                }
                ans += product;
                break;
            case '+':
                var sum = 0;
                for (var j = i; j < lines.length - 1; j++) {
                    var line = lines[j];
                    sum += Number(line[i]);
                }
                ans += sum;
                break;
            default:
                break;
        }
    }
    console.log('ans', ans);
}
;
// part1();
function part2() {
    var input = fs.readFileSync('./day6.txt', 'utf8');
    var rawLines = input.split('\n');
    var lines = [];
    for (var _i = 0, rawLines_2 = rawLines; _i < rawLines_2.length; _i++) {
        var line = rawLines_2[_i];
        var formatted = line.split('').filter(function (v) { return v !== '' && v !== '\r'; });
        console.log(JSON.stringify(formatted));
        lines.push(formatted);
    }
    var ans = 0;
    var opLine = lines[lines.length - 1];
    var currentTotal = 0;
    var op = '';
    for (var i = 0; i < lines[0].length; i++) {
        if (i < opLine.length) {
            if (opLine[i] !== ' ') {
                // new calculation started
                op = opLine[i];
                // console.log('currentTotal', currentTotal);
                ans += currentTotal;
                if (op === '+') {
                    currentTotal = 0;
                }
                else {
                    currentTotal = 1;
                }
            }
        }
        var currentNumber = 0;
        // get current number
        for (var j = 0; j < lines.length - 1; j++) {
            var line = lines[j];
            var c = line[i];
            if (c === ' ') {
                continue;
            }
            var digit = Number(c);
            currentNumber = (currentNumber * 10) + digit;
        }
        // console.log('currentNumber', currentNumber);
        if (currentNumber === 0) {
            continue;
        }
        switch (op) {
            case '*':
                currentTotal *= currentNumber;
                break;
            case '+':
                currentTotal += currentNumber;
                break;
            default:
                break;
        }
    }
    // console.log('currentTotal', currentTotal);
    ans += currentTotal;
    console.log('ans', ans);
}
;
part2();
