const answers =                                 //string containing all group answers
`abc

a
b
c

ab
ac

a
a
a
a

b`;

function answeredYes(input) {
  const groups = input.trim().split('\n\n');    //similar to last couple days

  let total = 0;

  for (const group of groups) {
    const allAnswers = group.replace(/\n/g, ''); //merge answers from group
    const uniqueAnswer = new Set(allAnswers);    //use Set to only store unique values
    total += uniqueAnswer.size;                  //add size of set to total count of yes answers
  }

  return total;                                 
}

//print total yes answers from answers string
console.log('Amount of questions that were answered with "yes": ' + answeredYes(answers)); 