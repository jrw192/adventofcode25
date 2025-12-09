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
    const input = fs.readFileSync('./day3.txt', 'utf8');
    const lines = input.split('\n');
    let ans = 0;
    for (const bank of lines) {
        let first = getBiggest(bank.slice(0, bank.length - 2));
        let i = first.i;
        let second = getBiggest(bank.slice(i + 1));
        let num = first.num * 10 + second.num;
        ans += num;
    }
    console.log('ans:', ans);
}
function getBiggest(str) {
    let output = {
        num: 0,
        i: 0,
    };
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let num = Number(char);
        if (num > output.num) {
            output.num = num;
            output.i = i;
        }
    }
    return output;
}
// part1();
function part2() {
    const input = fs.readFileSync('./day3.txt', 'utf8');
    const lines = input.split('\n');
    let ans = 0;
    for (let bank of lines) {
        bank = bank.trim();
        console.log('bank', bank);
        let val = 0;
        for (let i = 0; i < 12; i++) {
            let remainder = 12 - i - 1;
            let res = getBiggest(bank.slice(0, bank.length - remainder));
            val = val * 10 + res.num;
            bank = bank.slice(res.i + 1);
        }
        console.log('val', val);
        ans += val;
    }
    console.log('ans:', ans);
}
part2();
