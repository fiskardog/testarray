def f3():
    pass

def on_button_pressed_a():
    basic.show_number(values[0])
    basic.pause(100)
    basic.show_string("" + (colors[0]))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(values[2])
    basic.pause(100)
    basic.show_string("" + (colors[2]))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(values[1])
    basic.pause(100)
    basic.show_string("" + (colors[1]))
input.on_button_pressed(Button.B, on_button_pressed_b)

def f2():
    pass
def f1():
    pass
colors: List[str] = []
values: List[number] = []
values = [1, 2, 3]
colors = ["R", "G", "B"]
fcts = ["R", "G", "B"]

def on_forever():
    pass
basic.forever(on_forever)
