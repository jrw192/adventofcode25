import * as fs from 'fs';

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
                let first = str.slice(0,str.length/2);
                let second = str.slice(str.length/2);
                // console.log('str',str,'first',first,'second',second);

                if (first == second) {
                    ans += i;
                }
            }
        }
    }
    console.log('ans',ans);
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

            for (let j = 1; j <= str.length/2; j++) {
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
    console.log('ans',ans);
}

part2();