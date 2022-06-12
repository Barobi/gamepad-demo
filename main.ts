function c () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
}
function _2 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
}
function b () {
    speed += -16
}
function a () {
    speed += 16
}
function _3 () {
    motor.motorStop(motor.Motors.M2)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        if (control.eventValue() == 1) {
            a()
        } else if (control.eventValue() == 3) {
            b()
        } else if (control.eventValue() == 5) {
            c()
        } else if (control.eventValue() == 7) {
            d()
        } else if (control.eventValue() == 9) {
            _1()
        } else if (control.eventValue() == 11) {
            _2()
        } else if (control.eventValue() == 13) {
            _3()
        } else if (control.eventValue() == 15) {
            _4()
        } else if (control.eventValue() == 10 || control.eventValue() == 6) {
            motor.motorStopAll()
        } else if (control.eventValue() == 12 || control.eventValue() == 8) {
            motor.motorStopAll()
        } else if (control.eventValue() == 14) {
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
        } else if (control.eventValue() == 16) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
        }
    }
})
function d () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
}
function _4 () {
    motor.motorStop(motor.Motors.M1)
}
function _1 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
}
let speed = 0
let lastValue = 0
lastValue = 0
speed = 96
