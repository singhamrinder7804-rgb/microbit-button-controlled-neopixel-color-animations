let mode = 0
let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB_RGB)

strip.setBrightness(80)

function showAnimation() {
    if (mode == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    } else if (mode == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    } else if (mode == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    } else if (mode == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(190)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(190)
    }
}

input.onPinPressed(TouchPin.P1, function () {
    mode += 1
    if (mode > 3) {
        mode = 0
    }
})

input.onPinPressed(TouchPin.P2, function () {
    mode -= 1
    if (mode < 0) {
        mode = 3
    }
})

basic.forever(function () {
    showAnimation()
})