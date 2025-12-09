"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
function part1() {
    const input = fs.readFileSync('./day6.txt', 'utf8');
    const rawLines = input.split('\n');
    const lines = [];
    for (let line of rawLines) {
        let formatted = line.trim().split(' ').filter((v) => v !== '');
        lines.push(formatted);
    }
    console.log(lines);
    let ans = 0;
    let opLine = lines[lines.length - 1];
    for (let i = 0; i < opLine.length; i++) {
        let op = opLine[i];
        switch (op) {
            case '*':
                let product = 1;
                for (let j = i; j < lines.length - 1; j++) {
                    const line = lines[j];
                    product *= Number(line[i]);
                }
                ans += product;
                break;
            case '+':
                let sum = 0;
                for (let j = i; j < lines.length - 1; j++) {
                    const line = lines[j];
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
    const input = fs.readFileSync('./day6.txt', 'utf8');
    const rawLines = input.split('\n');
    const lines = [];
    for (let line of rawLines) {
        let formatted = line.split('').filter((v) => v !== '' && v !== '\r');
        console.log(JSON.stringify(formatted));
        lines.push(formatted);
    }
    let ans = 0;
    let opLine = lines[lines.length - 1];
    let currentTotal = 0;
    let op = '';
    for (let i = 0; i < lines[0].length; i++) {
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
        let currentNumber = 0;
        // get current number
        for (let j = 0; j < lines.length - 1; j++) {
            let line = lines[j];
            let c = line[i];
            if (c === ' ') {
                continue;
            }
            let digit = Number(c);
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
