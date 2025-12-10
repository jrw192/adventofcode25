import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day9.txt', 'utf8');
    const lines = input.split('\n').map((l) => l.split(',').map((v) => Number(v.trim())));

    // console.log(lines);

    let ans = 0;

    for (let i = 0; i < lines.length - 1; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            let box1 = lines[i];
            let box2 = lines[j];
            let edge1 = Math.abs(box1[0] - box2[0]) + 1;
            let edge2 = Math.abs(box1[1] - box2[1]) + 1;
            let area = edge1 * edge2;
            ans = Math.max(area, ans);
        }
    }
    console.log('ans', ans);
};

// part1();


function part2() {
    const input = fs.readFileSync('./day9.txt', 'utf8');
    const lines = input.split('\n').map((l) => l.split(',').map((v) => Number(v.trim())));

    // console.log(lines);

    let ans = 0;
    const xVals = getUniqueXVals(lines);
    const edges = getEdges(lines);

    for (let i = 0; i < lines.length - 1; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            let box1 = lines[i];
            let box2 = lines[j];
            let xMin = Math.min(box1[0], box2[0]);
            let xMax = Math.max(box1[0], box2[0]);
            let yMin = Math.min(box1[1], box2[1]);
            let yMax = Math.max(box1[1], box2[1]);

            console.log(box1, box2);

            // get test point
            let x = (xMin + xMax) / 2;
            let y = (yMin + yMax) / 2;
            if (isPointInBox(edges, x, y)) {
                // valid box
                let left: Segment = { horiz: false, x: xMin, yMin, yMax };
                let right: Segment = { horiz: false, x: xMax, yMin, yMax };
                let top: Segment = { horiz: true, y: yMax, xMin, xMax };
                let bottom: Segment = { horiz: true, y: yMin, xMin, xMax };
                let box = [left, right, top, bottom];

                // now make sure there are no other intersecting lines
                let intersections = 0;
                for (const edge of edges) {
                    if (doesEdgeIntersect(edge, box)) {
                        intersections += 1;
                    }
                }
                console.log('intersections',intersections);

                if (intersections == 0) {
                    // valid box
                    let edge1 = Math.abs(box1[0] - box2[0]) + 1;
                    let edge2 = Math.abs(box1[1] - box2[1]) + 1;
                    let area = edge1 * edge2;
                    console.log('area',area);
                    ans = Math.max(area, ans);
                }

            }
        }
    }

    console.log('ans', ans);
};

function doesEdgeIntersect(edge: Segment, box: Segment[]) {
    for (const side of box) {
        if (edge.horiz !== side.horiz) {
            if (edge.horiz === true) {
                if ((edge.xMin! < side.x! && edge.xMax! > side.x!)
                    && (side.yMin! < edge.y! && side.yMax! > edge.y!)) {
                    return true;
                }
            } else {
                if ((side.xMin! < edge.x! && side.xMax! > edge.x!)
                    && (edge.yMin! < side.y! && edge.yMax! > side.y!)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isPointInBox(edges: Segment[], x: number, y: number) {
    let ints = 0;
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        if (edge.horiz === false) {
            if (edge.x! > x && edge.yMin! <= y && edge.yMax! >= y) {
                ints += 1;
            }
        }
    }
    // inside if odd intersections
    return ints % 2 === 1;
}

function getUniqueXVals(lines: number[][]) {
    let x = new Set<number>();
    for (const line of lines) {
        x.add(line[0]);
    }

    return Array.from(x);
}

function getEdges(lines: number[][]) {
    let edges: Segment[] = [];
    for (let i = 0; i < lines.length; i++) {
        let j = (i + 1) % lines.length;
        let v1 = lines[i];
        let v2 = lines[j];

        if (v1[0] === v2[0]) {
            // vertical line
            let yMin = Math.min(v1[1], v2[1]);
            let yMax = Math.max(v1[1], v2[1]);
            edges.push({ horiz: false, x: v1[0], yMin, yMax })
        } else {
            // horizontal line
            let xMin = Math.min(v1[0], v2[0]);
            let xMax = Math.max(v1[0], v2[0]);
            edges.push({ horiz: true, y: v1[1], xMin, xMax })
        }
    }
    return edges;
}

interface Segment {
    horiz: boolean,
    x?: number,
    y?: number,
    xMin?: number,
    xMax?: number,
    yMin?: number,
    yMax?: number
}
part2();