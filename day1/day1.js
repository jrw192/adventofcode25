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
    const input = fs.readFileSync('./day1.txt', 'utf8');
    const lines = input.split('\n');
    let current = 50;
    let ans = 0;
    for (const line of lines) {
        let dir = line.substring(0, 1);
        let toMove = Number(line.substring(1));
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
    const input = fs.readFileSync('./day1.txt', 'utf8');
    const lines = input.split('\n');
    let current = 50;
    let ans = 0;
    for (const line of lines) {
        let dir = line.substring(0, 1);
        let toMove = Number(line.substring(1));
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
