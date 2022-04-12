item = 0
line = 0
number = 0
index = 0
while index < 5:
    for index2 in range(5):
        led.plot(number, line)
        number += 1
        basic.pause(50)
    number = 0
    line += 1
    basic.pause(50)
    index += 1
index = 0
while index < 15:
    item += 5
    index += 5
basic.show_string("PYTHON_")
basic.show_string(str(item))