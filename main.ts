let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    strip.clear()
    for (let A = 0; A <= 19; A++) {
        strip.setPixelColor(A, neopixel.rgb(0, 0, 255))
        strip.show()
        basic.pause(50)
    }
    custom.foo(
    20,
    27,
    255,
    10,
    0,
    80
    )
    basic.pause(83)
    custom.foo(
    28,
    40,
    255,
    10,
    0,
    80
    )
    basic.pause(1000)
})
