import * as fs from 'fs';

function part1() {
    const input = fs.readFileSync('./day8.txt', 'utf8');
    const boxes = input.split('\n').map((val) => val.split(',').map((n) => Number(n)));
    let distances = new Map<string, number>();

    // graph id : list of boxes in graph
    let graphs = new Map<number, number[]>();
    let id = 0;

    for (let i = 0; i < boxes.length; i++) {
        for (let j = i+1; j < boxes.length; j++) {
            let token = `${i},${j}`;

            let box1 = boxes[i];
            let box2 = boxes[j];
            let dist = Math.sqrt(Math.pow(box1[0] - box2[0], 2) + Math.pow(box1[1] - box2[1], 2) + Math.pow(box1[2] - box2[2], 2));

            distances.set(token, dist);
        }
    }

    let distArr = Array.from(distances.entries());
    distArr.sort((v1,v2) => v1[1] - v2[1]);
    // console.log(distArr);
    let connections = 0;

    for (const [token, dist] of distArr) {
        let [box1, box2] = token.split(',').map((n) => Number(n));
        // check if a box is already in a graph
        // get graphs of the two boxes
        let graph1Id = getBoxGraph(box1, graphs);
        let graph2Id = getBoxGraph(box2, graphs);

        // if none: make new graph
        if (graph1Id == -1 && graph2Id == -1) {
            let newGraph = [box1, box2];
            graphs.set(id, newGraph);
            id += 1;
        } else if (graph1Id == -1) {
            // add box1 to graph2
            let graph2 = graphs.get(graph2Id)!;
            graph2.push(box1);
            graphs.set(graph2Id, graph2);
        } else if (graph2Id == -1) {
            // add box2 to graph1
            let graph1 = graphs.get(graph1Id)!;
            graph1.push(box2);
            graphs.set(graph1Id, graph1);
        } else if (graph1Id !== graph2Id) {
            // merge graph2 into graph1
            let graph1 = graphs.get(graph1Id)!;
            let graph2 = graphs.get(graph2Id)!;
            graph1.push(...graph2);
            graphs.set(graph1Id, graph1);
            graphs.delete(graph2Id);
        }
        connections += 1;
        if (connections == 1000) {
            // console.log('final', graphs);
            let ans = 1;
            let sorted = Array.from(graphs).map((v) => [v[0],v[1].length]).sort((v1,v2) => v2[1]-v1[1]);
            // console.log('sorted',sorted);
            for (let i = 0; i < 3; i++) {
                ans *= sorted[i][1]
            }
            console.log('ans',ans);
            return;
        }
    }
};

function getBoxGraph(box: number, graphs: Map<number, number[]>) {
    let graphIds: number[] = [];
    for (let [k,v] of graphs.entries()) {
        if (v.includes(box)) {
            return k;
        }
    }

    return -1;
}

// part1();

function part2() {
    const input = fs.readFileSync('./day8.txt', 'utf8');
    const boxes = input.split('\n').map((val) => val.split(',').map((n) => Number(n)));
    let distances = new Map<string, number>();

    // graph id : list of boxes in graph
    let graphs = new Map<number, number[]>();

    for (let i = 0; i < boxes.length; i++) {
        graphs.set(i, [i]);
        for (let j = i+1; j < boxes.length; j++) {
            let token = `${i},${j}`;

            let box1 = boxes[i];
            let box2 = boxes[j];
            let dist = Math.sqrt(Math.pow(box1[0] - box2[0], 2) + Math.pow(box1[1] - box2[1], 2) + Math.pow(box1[2] - box2[2], 2));

            distances.set(token, dist);
        }
    }

    let distArr = Array.from(distances.entries());
    distArr.sort((v1,v2) => v1[1] - v2[1]);
    // console.log(distArr);

    for (const [token, dist] of distArr) {
        let [box1, box2] = token.split(',').map((n) => Number(n));
        // check if a box is already in a graph
        // get graphs of the two boxes
        let graph1Id = getBoxGraph(box1, graphs);
        let graph2Id = getBoxGraph(box2, graphs);

        if (graph1Id !== graph2Id) {
            // merge graph2 into graph1
            let graph1 = graphs.get(graph1Id)!;
            let graph2 = graphs.get(graph2Id)!;
            graph1.push(...graph2);
            graphs.set(graph1Id, graph1);
            graphs.delete(graph2Id);
        }
        
        if (graphs.size === 1) {
            // console.log('final', graphs);
            let box1Coords = boxes[box1];
            let box2Coords = boxes[box2];
            console.log('ans', box1Coords[0] * box2Coords[0]);
            return;
        }
    }
};

part2();