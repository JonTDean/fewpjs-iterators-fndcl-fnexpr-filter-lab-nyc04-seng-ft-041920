// Code your solution here
// Upcases both of the strings and then does a comparison check
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toUpperCase() == string.toUpperCase());
}

// Checks the first character of each string [Driver && String] and upcases them then does a comparsion check
function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.charAt(0).toUpperCase() == string.charAt(0).toUpperCase());
}

// Iterates through a hash and compares .name to given string
function matchName(drivers, string){
    return drivers.filter(driver => driver.name == string);
}

/*
Sources:
https://www.w3schools.com/jsref/jsref_touppercase.asp
*/