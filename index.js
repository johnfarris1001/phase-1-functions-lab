// Code your solution in this file!

function distanceFromHqInBlocks(start) {
    return Math.abs(start - 42);
}

function distanceFromHqInFeet(start) {
    return Math.abs(start - 42) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, end) {
    let dist = Math.abs(end - start) * 264;
    if (dist <= 400) {
        return 0;
    } else if (dist <= 2000) {
        return (dist - 400) * .02;
    } else if (dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}