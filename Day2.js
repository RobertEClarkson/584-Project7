const passwords = ["abcde", "cdefg", "ccccccccc"];      //store passwords and character conditions into arrays
const char = ["a", "b", "c"];

var count = 0;                                          //count for validation

function PasswordValidate(pass, char, least, most){     //function to call for each password
                                                        //params: password and char index, lower and upper bound allowed for password
    for(let i = 0; i < pass.length; i++){               //check every char in string
        if(pass.at(i) === char){                        //if char found, count++
            count++;
        }
    }
    console.log("Password: " + pass);
    if(count >= least && count <= most){                //if count of chars is within bounds for valid password
        console.log("Valid");                           //valid password
    }
    else{
        console.log("Invalid");                         //not valid
    }
    count = 0;                                          //reset count
}

PasswordValidate(passwords[0], char[0], 1, 3);          //abcde
PasswordValidate(passwords[1], char[1], 1, 3);          //cdefg
PasswordValidate(passwords[2], char[2], 2, 9);          //ccccccccc