maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 21) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 17) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 150)
    }
    if (message == 16) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 20)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 18) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 20)
    }
    if (message == 19) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 20 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
basic.forever(function () {
    basic.pause(200)
    music.ringTone(392)
    item.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    music.ringTone(294)
    item.showColor(neopixel.colors(NeoPixelColors.Blue))
})
