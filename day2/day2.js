"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day2.txt', 'utf8');
    var ranges = input.split(',');
    var ans = 0;
    for (var _i = 0, ranges_1 = ranges; _i < ranges_1.length; _i++) {
        var range = ranges_1[_i];
        var _a = range.split('-'), start = _a[0], end = _a[1];
        var startNum = Number(start);
        var endNum = Number(end);
        for (var i = startNum; i <= endNum; i++) {
            var str = String(i);
            if (str.length % 2 == 0) {
                var first = str.slice(0, str.length / 2);
                var second = str.slice(str.length / 2);
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
    var input = fs.readFileSync('./day2.txt', 'utf8');
    var ranges = input.split(',');
    var ans = 0;
    for (var _i = 0, ranges_2 = ranges; _i < ranges_2.length; _i++) {
        var range = ranges_2[_i];
        var _a = range.split('-'), start = _a[0], end = _a[1];
        var startNum = Number(start);
        var endNum = Number(end);
        for (var i = startNum; i <= endNum; i++) {
            var str = String(i);
            for (var j = 1; j <= str.length / 2; j++) {
                var test = String(i);
                var matcher = str.slice(0, j);
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
