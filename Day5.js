const passes =                                                                      //boarding passes from problem
`BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

function decodePass(Pass) {                                                        //function that converts the code into binary
                                                                                   //F and L = 0    B and R = 1
    const rowNum = Pass.slice(0, 7).replace(/[FL]/g, '0').replace(/[BR]/g, '1');   //first 7 digits number for the row
    const colNum = Pass.slice(7).replace(/[FL]/g, '0').replace(/[BR]/g, '1');      //last 3 digits for column

    const Row = parseInt(rowNum, 2);                                               //convert strings into int for ID calculation
    const Column = parseInt(colNum, 2);
    const ID = Row * 8 + Column;

    return { Pass, Row, Column, ID };                                              //return each const value
}

function convertID(input){                                                         
    const passList = input.trim().split(/\n/);                                     //similar to function from day 4  
    const results = passList.map(decodePass);                                      //use map to call decode function on our new
                                                                                   //list of boarding passes
    return results;                                                                //return resulting array of passes with values
}

console.log(convertID(passes));                                                    //call functions on the initial passes string and print