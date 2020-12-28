maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 21) {
        item.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 17) {
        item.showColor(neopixel.colors(NeoPixelColors.White))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 150)
    }
    if (message == 16) {
        item.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 20)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 18) {
        item.showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 20)
    }
    if (message == 19) {
        item.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 23) {
        music.playMelody("C5 F C5 F C5 F C5 F ", 250)
        music.stopAllSounds()
    }
})
let item: neopixel.Strip = null
item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 20 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
