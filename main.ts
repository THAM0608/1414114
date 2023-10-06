basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (false) {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200ms)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200ms)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200ms)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200ms)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200ms)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200ms)
    }
})
