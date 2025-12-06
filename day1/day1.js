"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day1.txt', 'utf8');
    var lines = input.split('\n');
    var current = 50;
    var ans = 0;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var dir = line.substring(0, 1);
        var toMove = Number(line.substring(1));
        if (dir === 'L') {
            current -= toMove;
            while (current < 0) {
                current += 99 + 1;
            }
        }
        else {
            current += toMove;
            while (current > 99) {
                current -= 99 + 1;
            }
        }
        if (current === 0) {
            ans += 1;
        }
        console.log('current:', current);
    }
    console.log('ans:', ans);
    return ans;
}
// part1();
function part2() {
    var input = fs.readFileSync('./day1.txt', 'utf8');
    var lines = input.split('\n');
    var current = 50;
    var ans = 0;
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        var dir = line.substring(0, 1);
        var toMove = Number(line.substring(1));
        if (dir === 'L') {
            current -= toMove;
            // let next = current - toMove;
            // if (next == 0) {
            //     console.log('incrementing at 0');
            //     ans += 1;
            // }
            if (current == 0) {
                ans += 1;
            }
            else {
                while (current < 0) {
                    console.log('incrementing passing 0');
                    ans += 1;
                    current += 100;
                }
            }
        }
        else {
            current += toMove;
            while (current > 99) {
                ans += 1;
                current -= 100;
            }
        }
        // if (current === 0) {
        //     console.log('incrementing at 0');
        //     ans += 1;
        // }
        console.log('current:', current);
    }
    console.log('ans:', ans);
    return ans;
}
part2();
