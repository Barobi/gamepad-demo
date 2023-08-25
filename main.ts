function _4_up () {
    motor.motorStop(motor.Motors.M2)
}
function c_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, motorSpeed)
}
function c_up () {
    motor.motorStop(motor.Motors.M1)
}
function _4_down () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, motorSpeed)
}
function b_down () {
    motorSpeed += -16
}
function b_up () {
	
}
function _3_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, motorSpeed)
}
function _1_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, motorSpeed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, motorSpeed)
}
function d_down () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, motorSpeed)
}
function a_down () {
    motorSpeed += 16
}
function _2_up () {
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M2)
}
function _1_up () {
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M2)
}
function d_up () {
    motor.motorStop(motor.Motors.M2)
}
function _2_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, motorSpeed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, motorSpeed)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (prevButtonEvent != control.eventValue()) {
        prevButtonEvent = control.eventValue()
        if (control.eventValue() == 1) {
            a_down()
        } else if (control.eventValue() == 2) {
            a_up()
        } else if (control.eventValue() == 3) {
            b_down()
        } else if (control.eventValue() == 4) {
            b_up()
        } else if (control.eventValue() == 5) {
            c_down()
        } else if (control.eventValue() == 6) {
            c_up()
        } else if (control.eventValue() == 7) {
            d_down()
        } else if (control.eventValue() == 8) {
            d_up()
        } else if (control.eventValue() == 9) {
            _1_down()
        } else if (control.eventValue() == 10) {
            _1_up()
        } else if (control.eventValue() == 11) {
            _2_down()
        } else if (control.eventValue() == 12) {
            _2_up()
        } else if (control.eventValue() == 13) {
            _3_down()
        } else if (control.eventValue() == 14) {
            _3_up()
        } else if (control.eventValue() == 15) {
            _4_down()
        } else if (control.eventValue() == 16) {
            _4_up()
        }
    }
})
function _3_up () {
    motor.motorStop(motor.Motors.M1)
}
function a_up () {
	
}
let prevButtonEvent = 0
let motorSpeed = 0
motorSpeed = 192
prevButtonEvent = 0
