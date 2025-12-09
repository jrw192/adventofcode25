import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day5.txt', 'utf8');
    const lines = input.split('\n');

    let ranges = [];
    let ingredients = [];
    let ing = false;
    for (let line of lines) {
        line = line.trim();
        if (ing) {
            ingredients.push(Number(line));
        } else if (line === '') {
            ing = true;
        } else {
            let [start, end] = line.split('-');
            ranges.push({start: Number(start), end: Number(end)});
        }
    }
    ranges.sort((r1, r2) => r1.start - r2.start);
    
    let mergedRanges = [];
    let start =  ranges[0].start;
    let end = ranges[0].end;
    for (let i = 1; i < ranges.length; i++) {
        let currentRange = ranges[i];
        if (end >= currentRange.start) {
            end = Math.max(currentRange.end, end);
        } else {
            mergedRanges.push({start, end});
            start = currentRange.start;
            end = currentRange.end;
        }
    }
     mergedRanges.push({start, end});

    let ans = 0;

    for (const ing of ingredients) {
        for (const range of ranges) {
            if (range.start <= ing && range.end >= ing) {
                ans += 1;
                break;
            }
        }
    }
    console.log('ans',ans);
};


// part1();

function part2() {
    const input = fs.readFileSync('./day5.txt', 'utf8');
    const lines = input.split('\n');

    let ranges = [];
    let ingredients = [];
    for (let line of lines) {
        line = line.trim();
        if (line === '') {
            break;
        } else {
            let [start, end] = line.split('-');
            ranges.push({start: Number(start), end: Number(end)});
        }
    }
    ranges.sort((r1, r2) => r1.start - r2.start);
    
    let mergedRanges = [];
    let start =  ranges[0].start;
    let end = ranges[0].end;
    for (let i = 1; i < ranges.length; i++) {
        let currentRange = ranges[i];
        if (end >= currentRange.start) {
            end = Math.max(currentRange.end, end);
        } else {
            mergedRanges.push({start, end});
            start = currentRange.start;
            end = currentRange.end;
        }
    }
     mergedRanges.push({start, end});
    //  console.log('mergedRanges', mergedRanges);

    let ans = 0;
    
    for (const range of mergedRanges) {
        ans += (range.end - range.start +1);
    }

    console.log('ans',ans);
};

part2();