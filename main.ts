let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
let cirkel_pause = 10
let A_pause = 20
let A = 0
let B = 0
let range = strip.range(20, 20)
custom.foo(
0,
40,
0,
0,
0,
0
)
basic.forever(function () {
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
    range.showRainbow(1, 360)
    basic.pause(1000)
    custom.foo(
    0,
    40,
    0,
    0,
    0,
    5
    )
})
