// Code your solution in this file!
function distanceFromHqInBlocks (blocksPickUp) {
    return (blocksPickUp > 42) ? (blocksPickUp - 42) : (42 - blocksPickUp)
}

function distanceFromHqInFeet(feetPickUp) {
   return distanceFromHqInBlocks(feetPickUp) * 264
}

function distanceTravelledInFeet(start, destination) {
    return ( start >= destination) ? ((start - destination) * 264) : ((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && (distanceTravelledInFeet(start, destination) <= 2000)) {
        return (distanceTravelledInFeet(start, destination)- 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && (distanceTravelledInFeet(start, destination) <= 2500)) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
  }