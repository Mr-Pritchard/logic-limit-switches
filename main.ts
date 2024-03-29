basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && !(input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)))) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    }
    if (input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1))))) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    }
    if (input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && (input.pinIsPressed(TouchPin.P0) && !(input.pinIsPressed(TouchPin.P1))))) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (!(input.buttonIsPressed(Button.A)) && (!(input.buttonIsPressed(Button.B)) && (input.pinIsPressed(TouchPin.P0) && !(input.pinIsPressed(TouchPin.P1))))) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (!(input.buttonIsPressed(Button.A) && (input.buttonIsPressed(Button.B) && (input.pinIsPressed(TouchPin.P0) && !(input.pinIsPressed(TouchPin.P1)))))) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    }
    if (!(input.buttonIsPressed(Button.A) && (input.buttonIsPressed(Button.B) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1)))))) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    }
    if (!(input.buttonIsPressed(Button.A) && (input.buttonIsPressed(Button.B) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1)))))) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (!(input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && (!(input.pinIsPressed(TouchPin.P0)) && input.pinIsPressed(TouchPin.P1))))) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (!(input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && (!(input.pinIsPressed(TouchPin.P0)) && !(input.pinIsPressed(TouchPin.P1)))))) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
})
