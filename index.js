// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42)
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(pickUp, dropOff) {
    return Math.abs((pickUp - dropOff) * 264)
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000 && distance > 400) {
        let num = 0
        num = (distance / 100 * 2 - 8);
        return parseFloat(num.toFixed(2));
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } 
    else {
        return "cannot travel that far"
    }
}




