"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function part1() {
    var input = fs.readFileSync('./day7.txt', 'utf8');
    var lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }
    var ans = 0;
    var beamLocations = new Set();
    for (var j = 0; j < lines.length; j++) {
        var line = lines[j];
        for (var i = 0; i < line.length; i++) {
            var char = line.charAt(i);
            switch (char) {
                case '^':
                    if (beamLocations.has(i)) {
                        ans += 1;
                        // split the beam
                        beamLocations.delete(i);
                        var left = i - 1;
                        var right = i + 1;
                        if (left >= 0) {
                            // check if that beam doesn't exist yet
                            if (!beamLocations.has(left)) {
                                // add a beam, increase ans
                                beamLocations.add(left);
                                // lines[j] = lines[j].substring(0, left) + '|' + lines[j].substring(left+1);
                            }
                        }
                        if (right < line.length) {
                            if (!beamLocations.has(right)) {
                                beamLocations.add(right);
                                // lines[j] = lines[j].substring(0, right) + '|' + lines[j].substring(right+1);
                            }
                        }
                    }
                    break;
                case 'S':
                    beamLocations.add(i);
                    // lines[j] = lines[j].substring(0, i) + '|' + lines[j].substring(i+1);
                    break;
                case '.':
                    // continue beam
                    if (beamLocations.has(i)) {
                        // lines[j] = lines[j].substring(0, i) + '|' + lines[j].substring(i+1);
                    }
                default:
                    break;
            }
        }
    }
    // console.log('--------------------------');
    // for (const line of lines) {
    //     console.log(line);
    // }
    console.log('ans', ans);
}
// part1();
function part2() {
    var _a, _b;
    var input = fs.readFileSync('./day7.txt', 'utf8');
    var lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }
    var beamLocations = new Map();
    for (var i = 0; i < lines[0].length; i++) {
        beamLocations.set(i, 0);
    }
    for (var j = 0; j < lines.length; j++) {
        var line = lines[j];
        for (var i = 0; i < line.length; i++) {
            var char = line.charAt(i);
            switch (char) {
                case '^':
                    if (beamLocations.get(i) > 0) {
                        // split the beam
                        var initial = beamLocations.get(i);
                        var left = i - 1;
                        var right = i + 1;
                        if (left >= 0) {
                            // add a beam, increase ans
                            beamLocations.set(left, ((_a = beamLocations.get(left)) !== null && _a !== void 0 ? _a : 0) + initial);
                        }
                        if (right < line.length) {
                            beamLocations.set(right, ((_b = beamLocations.get(right)) !== null && _b !== void 0 ? _b : 0) + initial);
                        }
                        beamLocations.set(i, 0);
                    }
                    break;
                case 'S':
                    beamLocations.set(i, 1);
                    break;
                case '.':
                    // continue beam
                    if (beamLocations.has(i)) {
                    }
                    break;
                default:
                    break;
            }
        }
    }
    var ans = 0;
    // for (const [k,v] of beamLocations.entries()) {
    //     ans += v;
    // }
    beamLocations.forEach(function (v, k) {
        ans += v;
    });
    console.log('ans', ans);
}
part2();
