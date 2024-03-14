input.onButtonPressed(Button.A, function () {
    voeden += 5
})
input.onButtonPressed(Button.B, function () {
    knuffelen += 5
})
let knuffelen = 20
let voeden = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffelen += -1
})
loops.everyInterval(1000, function () {
    voeden += -1
})
basic.forever(function () {
    if ((knuffelen && voeden) < 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if ((knuffelen && voeden) > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (knuffelen < 0) {
        dood += 1
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (voeden > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (voeden < 0) {
        dood += 1
    }
})
