const passportInput =                                                          //store passports from problem in string
`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

function countValidPassports(input) {                                          //function to read passports string
    const passports = input.trim().split(/\n\s*\n/);                           //separate string by the spaces

    const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];        //all fields needed for valid passport. no cid

    let count = 0;

    for (const passport of passports) {                                        //for each element in passports list
        const fields = passport.split(/\s+/);                                  //split the individual passport into another list
        const keys = fields.map(field => field.split(":")[0]);                 //new array containing the keys in the passport

        const hasAllRequired = required.every(req => keys.includes(req));      //checks every item in keys array for requirements

        if (hasAllRequired) {                                                  //valid passport
        count++;
        }

        //testing
        /*
        console.log(fields);                                                   
        console.log(keys);
        console.log(hasAllRequired);
        */
    }

  return count;                                                                //return number of valid passports
}

console.log("Valid Passports: " + countValidPassports(passportInput));         //print answer