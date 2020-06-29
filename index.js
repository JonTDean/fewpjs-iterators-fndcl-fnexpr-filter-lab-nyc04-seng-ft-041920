// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toUpperCase() == string.toUpperCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.charAt(0).toUpperCase() == string.charAt(0).toUpperCase());
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name == string);
}