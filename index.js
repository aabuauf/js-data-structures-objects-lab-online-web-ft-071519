// Write your solution in this file!
let driver = {}
function destructivelyUpdateDriverWithKeyAndValue(drivers, key, value){
   drivers[key]=value;
   return drivers
}

function updateDriverWithKeyAndValue(drivers, key, value){
    const newdriver = { ...drivers };
   newdriver[key]=value
   return newdriver
}