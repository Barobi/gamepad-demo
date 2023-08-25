function _4_up () {
    motor.motorStop(motor.Motors.M1)
}
function c_down () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, motorSpeed)
}
function c_up () {
    motor.motorStop(motor.Motors.M2)
}
function _4_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, motorSpeed)
}
function b_down () {
    changeSpeed(-1)
}
function b_up () {
	
}
function _3_down () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, motorSpeed)
}
function _1_down () {
	
}
function d_down () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, motorSpeed)
}
function a_down () {
    changeSpeed(1)
}
function changeSpeed (delta: number) {
    speed = Math.constrain(speed + delta, 0, 15)
    if (speed <= 9) {
        basic.showNumber(speed)
    } else if (speed == 10) {
        basic.showString("A")
    } else if (speed == 11) {
        basic.showString("B")
    } else if (speed == 12) {
        basic.showString("C")
    } else if (speed == 13) {
        basic.showString("D")
    } else if (speed == 14) {
        basic.showString("E")
    } else if (speed == 15) {
        basic.showString("F")
    }
    motorSpeed = Math.constrain((speed + 1) * 16, 0, 255)
}
function _2_up () {
	
}
function _1_up () {
	
}
function d_up () {
    motor.motorStop(motor.Motors.M1)
}
function _2_down () {
	
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
    motor.motorStop(motor.Motors.M2)
}
function a_up () {
	
}
let motorSpeed = 0
let speed = 0
let prevButtonEvent = 0
prevButtonEvent = 0
speed = 11
changeSpeed(0)
