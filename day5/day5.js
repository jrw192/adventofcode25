"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day5.txt', 'utf8');
    var lines = input.split('\n');
    var ranges = [];
    var ingredients = [];
    var ing = false;
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        line = line.trim();
        if (ing) {
            ingredients.push(Number(line));
        }
        else if (line === '') {
            ing = true;
        }
        else {
            var _a = line.split('-'), start_1 = _a[0], end_1 = _a[1];
            ranges.push({ start: Number(start_1), end: Number(end_1) });
        }
    }
    ranges.sort(function (r1, r2) { return r1.start - r2.start; });
    var mergedRanges = [];
    var start = ranges[0].start;
    var end = ranges[0].end;
    for (var i = 1; i < ranges.length; i++) {
        var currentRange = ranges[i];
        if (end >= currentRange.start) {
            end = Math.max(currentRange.end, end);
        }
        else {
            mergedRanges.push({ start: start, end: end });
            start = currentRange.start;
            end = currentRange.end;
        }
    }
    mergedRanges.push({ start: start, end: end });
    var ans = 0;
    for (var _b = 0, ingredients_1 = ingredients; _b < ingredients_1.length; _b++) {
        var ing_1 = ingredients_1[_b];
        for (var _c = 0, ranges_1 = ranges; _c < ranges_1.length; _c++) {
            var range = ranges_1[_c];
            if (range.start <= ing_1 && range.end >= ing_1) {
                ans += 1;
                break;
            }
        }
    }
    console.log('ans', ans);
}
;
// part1();
function part2() {
    var input = fs.readFileSync('./day5.txt', 'utf8');
    var lines = input.split('\n');
    var ranges = [];
    var ingredients = [];
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        line = line.trim();
        if (line === '') {
            break;
        }
        else {
            var _a = line.split('-'), start_2 = _a[0], end_2 = _a[1];
            ranges.push({ start: Number(start_2), end: Number(end_2) });
        }
    }
    ranges.sort(function (r1, r2) { return r1.start - r2.start; });
    var mergedRanges = [];
    var start = ranges[0].start;
    var end = ranges[0].end;
    for (var i = 1; i < ranges.length; i++) {
        var currentRange = ranges[i];
        if (end >= currentRange.start) {
            end = Math.max(currentRange.end, end);
        }
        else {
            mergedRanges.push({ start: start, end: end });
            start = currentRange.start;
            end = currentRange.end;
        }
    }
    mergedRanges.push({ start: start, end: end });
    //  console.log('mergedRanges', mergedRanges);
    var ans = 0;
    for (var _b = 0, mergedRanges_1 = mergedRanges; _b < mergedRanges_1.length; _b++) {
        var range = mergedRanges_1[_b];
        ans += (range.end - range.start + 1);
    }
    console.log('ans', ans);
}
;
part2();
