/**
 * prava ciara
 */
function goToRightLine () {
    cuteBot.motors(25, 25)
    basic.pause(100)
    cuteBot.motors(0, 0)
    basic.pause(200)
    turn(220)
    goForwardUntilLine()
    basic.pause(250)
    followLineUntilWhiteSpace()
}
function goToMiddleLine () {
    basic.pause(200)
    turn(100)
    cuteBot.motors(35, 35)
    basic.pause(250)
    followLineUntilWhiteSpace()
}
function followLineUntilWhiteSpace () {
    cuteBot.motors(30, 30)
    while (!(cuteBot.tracking(cuteBot.TrackingState.L_R_unline))) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, 15)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(15, 30)
        } else {
            cuteBot.motors(30, 30)
        }
    }
    cuteBot.motors(0, 0)
}
function goForwardUntilLine () {
    cuteBot.motors(20, 20)
    while (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
    	
    }
    cuteBot.motors(0, 0)
}
/**
 * lava ciara
 */
function goToLeftLine () {
    cuteBot.motors(25, 25)
    basic.pause(100)
    cuteBot.motors(0, 0)
    basic.pause(200)
    turn(50)
    goForwardUntilLine()
    basic.pause(250)
    followLineUntilWhiteSpace()
}
function returnBackToStartOfLine () {
    turn(260)
    goForwardUntilLine()
    followLineUntilWhiteSpace()
}
function turnToPickupTrash () {
    turn(-100)
    basic.pause(1000)
    turn(-150)
    goForwardUntilLine()
    followLineUntilWhiteSpace()
    returnBackToStartOfLine()
}
function turn (deg: number) {
    if (deg > 0) {
        cuteBot.motors(55, 0)
        basic.pause(deg / 45 * 150)
    } else {
        cuteBot.motors(0, 55)
        basic.pause(deg * -1 / 45 * 150)
    }
    cuteBot.motors(0, 0)
}
followLineUntilWhiteSpace()
turnToPickupTrash()
goToMiddleLine()
returnBackToStartOfLine()
turn(-80)
goForwardUntilLine()
followLineUntilWhiteSpace()
returnBackToStartOfLine()
turnToPickupTrash()
goToLeftLine()
returnBackToStartOfLine()
turn(-30)
goForwardUntilLine()
