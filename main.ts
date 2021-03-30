input.onButtonPressed(Button.A, function () {
    A = 1
})
input.onButtonPressed(Button.B, function () {
    B = 1
})
let B = 0
let A = 0
let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
let cirkel_pause = 10
let A_pause = 20
A = 0
B = 0
custom.foo(
0,
40,
0,
0,
0,
0
)
basic.forever(function () {
    if (A == 1) {
        custom.foo(
        0,
        16,
        3,
        3,
        250,
        A_pause
        )
        basic.pause(100)
        custom.foo(
        17,
        19,
        3,
        3,
        250,
        A_pause
        )
        basic.pause(500)
        custom.foo(
        20,
        27,
        255,
        10,
        0,
        cirkel_pause
        )
        basic.pause(83)
        custom.foo(
        28,
        40,
        255,
        10,
        0,
        cirkel_pause
        )
        basic.pause(1000)
    } else if (B == 1) {
        custom.foo(
        0,
        16,
        0,
        255,
        0,
        A_pause
        )
        basic.pause(100)
        custom.foo(
        17,
        19,
        0,
        255,
        0,
        A_pause
        )
        basic.pause(500)
        custom.foo(
        20,
        27,
        0,
        200,
        100,
        cirkel_pause
        )
        basic.pause(83)
        custom.foo(
        28,
        40,
        0,
        200,
        100,
        cirkel_pause
        )
        basic.pause(1000)
    } else {
        for (let indeks = 0; indeks <= 40; indeks++) {
            strip.rotate(1)
            strip.show()
            basic.pause(1)
        }
    }
    A = 0
    B = 0
})
