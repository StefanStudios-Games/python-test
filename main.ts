let item = 0
let line = 0
let number = 0
let index = 0
while (index < 5) {
    for (let index2 = 0; index2 < 5; index2++) {
        led.plot(number, line)
        number += 1
        basic.pause(50)
    }
    number = 0
    line += 1
    basic.pause(50)
    index += 1
}
index = 0
while (index < 15) {
    item += 5
    index += 5
}
basic.showString("PYTHON_")
basic.showString("" + item)
