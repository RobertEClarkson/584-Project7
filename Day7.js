const bagRules =                                                //rules string
`
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
`;

function rulesMap(input) {
    const rules = new Map();                                    //create a map object containing the ruleset

    for (const line of input.trim().split('\n')) {              //for every line in the bagRules string
        const [outer, inner] = line.split(' bags contain ');    //create two lists based on elements before and after
                                                                //each 'bags contain'

        //testing
        /*
        console.log(outer);
        console.log(inner);
        */

        if (inner.includes('no other bags')) continue;          //can't contain other bag so ignore

        const contents = inner.split(',').map(x => {            //individual bag descriptions in inner
        const match = x.match(/(\d+) (.+?) bag/);               //get rid of digits before description
        return match ? match[2] : null;
        });

        //console.log(contents);                                  //testing

        for (const bag of contents) {                           //For each inner bag, record that it can be contained by 'outer'
        if (!rules.has(bag)) rules.set(bag, []);
        rules.get(bag).push(outer);
        }

        //console.log(rules);                                     //testing
    }

    return rules;                                               //return completed map object
}

function containsShinyGold(input) {             
    const graph = rulesMap(input);              //call other function on input
    const stack = ['shiny gold'];               //instead of starting from the outside bag, start from the shiny gold bag
    const seen = new Set();                     //set object for bags that we have already checked

    while (stack.length) {                      //traverse bag stack like 
        const bag = stack.pop();                //bag at top of stack 
        const parents = graph.get(bag) || [];   //set 'parent' bag (bag that can contain current bag)

        for (const p of parents) {              
            if (!seen.has(p)) {                 //if bag hasn't been seen yet then add it to set and push to stack
                seen.add(p);
                stack.push(p);
            }
        }

        //testing
        /*
        console.log(stack);
        console.log(parents);
        console.log(seen);
        */
    }

    return seen.size;                           //return size of set of bags
}

console.log("Number of bag colors that can contain at least 1 gold: " + containsShinyGold(bagRules));