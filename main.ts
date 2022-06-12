control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        // A
        // B
        // C
        // D
        // 1
        // 2
        // 3
        // 4
        if (control.eventValue() == 1) {
            basic.showString("A")
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
        } else if (control.eventValue() == 5) {
            basic.showString("C")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
        } else if (control.eventValue() == 7) {
            basic.showString("D")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
        } else if (control.eventValue() == 9) {
            basic.showString("1")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
        } else if (control.eventValue() == 11) {
            basic.showString("2")
            motor.motorStopAll()
        } else if (control.eventValue() == 13) {
            basic.showString("3")
            motor.motorStop(motor.Motors.M1)
            basic.pause(200)
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
        } else if (control.eventValue() == 15) {
            basic.showString("4")
            motor.motorStop(motor.Motors.M2)
            basic.pause(200)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
        } else {
            basic.clearScreen()
        }
    }
})
let speed = 0
let lastValue = 0
lastValue = 0
speed = 80
bluetooth.startLEDService()
basic.showString("GAMEPAD DEMO")
