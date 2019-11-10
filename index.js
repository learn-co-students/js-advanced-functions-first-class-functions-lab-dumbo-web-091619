// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    const firstArray = []
    firstArray.push(arrayOfDrivers[0], arrayOfDrivers[1])
    return firstArray
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    let arrLength = arrayOfDrivers.length
    return arrayOfDrivers.slice(arrLength-2, arrLength)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num1) => {
   return (num2) => {return num1 * num2}
}

const fareDoubler = (fare) => {return fare * 2}

const fareTripler = (fare) => {return fare * 3}

const selectDifferentDrivers = (arrayofDrivers, func) => {
    return func(arrayofDrivers)
}