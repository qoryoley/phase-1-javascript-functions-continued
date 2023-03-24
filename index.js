// code your solution here

function saturdayFun(someString = 'roller-skate'){
    return `This Saturday, I want to ${someString}!`;
}

function mondayWork(someString = 'go to the office'){
    return `This Monday, I will ${someString}.`;
}
function wrapAdjective(wrapper){
    return function (someString){
        return `You are ${wrapper}${someString}${wrapper}!`; 
    }
}

console.log(wrapAdjective('||'));