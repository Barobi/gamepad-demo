function c () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
}
function _2 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
}
function b () {
    motor.motorStopAll()
}
function a () {
    motor.motorStopAll()
}
function _3 () {
    motor.motorStop(motor.Motors.M2)
    basic.pause(200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
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
        }
    }
})
function d () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, speed)
}
function _4 () {
    motor.motorStop(motor.Motors.M1)
    basic.pause(200)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
}
function _1 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
}
let speed = 0
let lastValue = 0
lastValue = 0
speed = 96
