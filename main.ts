/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael
 * Created on: Sep 2025
 * This program Shows temperature K
*/

// our variable for a temperature
let temperatureKelvin: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Shows real temperature K
input.onButtonPressed(Button.A, function () {
    temperatureKelvin = input.temperature()
    basic.showString('The temperature is:' + (temperatureKelvin + 273).toString() + 'K')
})