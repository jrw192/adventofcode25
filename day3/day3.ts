import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day3.txt', 'utf8');
    const lines = input.split('\n');
    let ans = 0;

    for (const bank of lines) {
        let first = getBiggest(bank.slice(0,bank.length-2));
        let i = first.i;
        let second = getBiggest(bank.slice(i+1));
        let num = first.num * 10 + second.num;

        ans += num;
    }
    console.log('ans:',ans);
}

function getBiggest(str: string) {
    let output = {
        num: 0,
        i: 0,
    }
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
        console.log('bank',bank);
        let val = 0;
        for (let i = 0; i < 12; i++) {
            let remainder = 12 - i - 1;
            let res = getBiggest(bank.slice(0,bank.length-remainder));
            val = val * 10 + res.num;
            bank = bank.slice(res.i+1);
        }
        console.log('val',val);
        ans += val;
    }
    console.log('ans:',ans);
}

part2();