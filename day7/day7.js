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
    const input = fs.readFileSync('./day7.txt', 'utf8');
    const lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }
    let ans = 0;
    let beamLocations = new Set();
    for (let j = 0; j < lines.length; j++) {
        let line = lines[j];
        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);
            switch (char) {
                case '^':
                    if (beamLocations.has(i)) {
                        ans += 1;
                        // split the beam
                        beamLocations.delete(i);
                        const left = i - 1;
                        const right = i + 1;
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
    const input = fs.readFileSync('./day7.txt', 'utf8');
    const lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }
    let beamLocations = new Map();
    for (let i = 0; i < lines[0].length; i++) {
        beamLocations.set(i, 0);
    }
    for (let j = 0; j < lines.length; j++) {
        let line = lines[j];
        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);
            switch (char) {
                case '^':
                    if (beamLocations.get(i) > 0) {
                        // split the beam
                        const initial = beamLocations.get(i);
                        const left = i - 1;
                        const right = i + 1;
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
    let ans = 0;
    // for (const [k,v] of beamLocations.entries()) {
    //     ans += v;
    // }
    beamLocations.forEach((v, k) => {
        ans += v;
    });
    console.log('ans', ans);
}
part2();
