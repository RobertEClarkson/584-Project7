var numbers = [1721, 979, 366, 299, 675, 1456];             //array to store numbers from problem
var product = 0;                                            //var to store product of numbers that sum to 2020

outerblock: for(let i = 0; i < numbers.length; i++ ){       //nested for loop with outerblock so when we find the right 
                                                            //numbers, we break both loops
    for(let j = 0; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === 2020){
            product = numbers[i] * numbers[j];              //multiply the numbers that sum to 2020
            break outerblock;
        }
        console.log("Inner Loop" + (j + 1));                //keep track of how many loops
    }
    console.log("Outer Loop" + (i + 1));
}

console.log(product);                                       //output answer. Expected: 514579