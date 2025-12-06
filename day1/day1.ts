import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day1.txt', 'utf8');
    const lines = input.split('\n');

    let current = 50;
    let ans = 0;

    for (const line of lines) {
        let dir = line.substring(0,1);
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
        let dir = line.substring(0,1);
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
            } else { 
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