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
    const input = fs.readFileSync('./day2.txt', 'utf8');
    const ranges = input.split(',');
    let ans = 0;
    for (const range of ranges) {
        let [start, end] = range.split('-');
        let startNum = Number(start);
        let endNum = Number(end);
        for (let i = startNum; i <= endNum; i++) {
            let str = String(i);
            if (str.length % 2 == 0) {
                let first = str.slice(0, str.length / 2);
                let second = str.slice(str.length / 2);
                // console.log('str',str,'first',first,'second',second);
                if (first == second) {
                    ans += i;
                }
            }
        }
    }
    console.log('ans', ans);
}
// part1();
function part2() {
    const input = fs.readFileSync('./day2.txt', 'utf8');
    const ranges = input.split(',');
    let ans = 0;
    for (const range of ranges) {
        let [start, end] = range.split('-');
        let startNum = Number(start);
        let endNum = Number(end);
        for (let i = startNum; i <= endNum; i++) {
            let str = String(i);
            for (let j = 1; j <= str.length / 2; j++) {
                let test = String(i);
                let matcher = str.slice(0, j);
                while (test.slice(0, j) == matcher) {
                    test = test.slice(j);
                }
                if (test.length == 0) {
                    // console.log('match with', str);
                    ans += Number(str);
                    break;
                }
            }
        }
    }
    console.log('ans', ans);
}
part2();
