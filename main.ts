control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        if (control.eventValue() == 1) {
            basic.showString("A")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        } else if (control.eventValue() == 5) {
            basic.showString("C")
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
        } else if (control.eventValue() == 7) {
            basic.showString("D")
            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        } else if (control.eventValue() == 9) {
            basic.showString("1")
            motor.motorStopAll()
        } else if (control.eventValue() == 11) {
            basic.showString("2")
        } else if (control.eventValue() == 13) {
            basic.showString("3")
        } else if (control.eventValue() == 15) {
            basic.showString("4")
        } else {
            basic.clearScreen()
        }
    }
})
let lastValue = 0
lastValue = 0
bluetooth.startLEDService()
basic.showString("GAMEPAD DEMO")
