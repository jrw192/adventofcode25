import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day7.txt', 'utf8');
    const lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }

    let ans = 0;
    let beamLocations = new Set<number>();
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
                        const left = i-1;
                        const right = i+1;
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
    console.log('ans',ans);
}

// part1();

function part2() {
    const input = fs.readFileSync('./day7.txt', 'utf8');
    const lines = input.split('\n');
    // for (const line of lines) {
    //     console.log(line);
    // }

    let beamLocations = new Map<number, number>();
    for (let i = 0; i < lines[0].length; i++) {
        beamLocations.set(i, 0);
    }
    for (let j = 0; j < lines.length; j++) {
        let line = lines[j];
        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);

            switch (char) {
                case '^':
                    if (beamLocations.get(i)! > 0) {
                        // split the beam
                        const initial = beamLocations.get(i)!;
                        const left = i-1;
                        const right = i+1;
                        if (left >= 0) {
                            // add a beam, increase ans
                            beamLocations.set(left, (beamLocations.get(left) ?? 0) + initial);
                        }
                        if (right < line.length) {
                            beamLocations.set(right, (beamLocations.get(right) ?? 0) + initial);
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
    beamLocations.forEach((v,k) => {
        ans += v;
    })
    console.log('ans',ans);
}

part2();