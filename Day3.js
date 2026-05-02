const map = [                                   //map from problem stored as string array
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#"
];

let count = 0;
let x = 0;                                      //horizontal position
const width = map[0].length;                    //width of each string is same so store first value

for (let y = 0; y < map.length; y += 1) {       //move down 1 at start of each loop
    if (map[y][x % width] === '#') {            //check for # at each spot. y first because it changes the line
                                                //modulo(%) to simulate the larger map in problem. loops back when x is larger than width
      count++;                                  //count++ for each #
    }
    x += 3;                                     //move right 3
}

console.log("Trees in path: " + count);         //result