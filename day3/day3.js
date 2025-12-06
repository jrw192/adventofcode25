"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day3.txt', 'utf8');
    var lines = input.split('\n');
    var ans = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var bank = lines_1[_i];
        var first = getBiggest(bank.slice(0, bank.length - 2));
        var i = first.i;
        var second = getBiggest(bank.slice(i + 1));
        var num = first.num * 10 + second.num;
        ans += num;
    }
    console.log('ans:', ans);
}
function getBiggest(str) {
    var output = {
        num: 0,
        i: 0,
    };
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var num = Number(char);
        if (num > output.num) {
            output.num = num;
            output.i = i;
        }
    }
    return output;
}
// part1();
function part2() {
    var input = fs.readFileSync('./day3.txt', 'utf8');
    var lines = input.split('\n');
    var ans = 0;
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var bank = lines_2[_i];
        bank = bank.trim();
        console.log('bank', bank);
        var val = 0;
        for (var i = 0; i < 12; i++) {
            var remainder = 12 - i - 1;
            var res = getBiggest(bank.slice(0, bank.length - remainder));
            val = val * 10 + res.num;
            bank = bank.slice(res.i + 1);
        }
        console.log('val', val);
        ans += val;
    }
    console.log('ans:', ans);
}
part2();
