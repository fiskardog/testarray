function f3() {
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(values[0])
    basic.pause(100)
    basic.showString("" + colors[0])
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showNumber(values[2])
    basic.pause(100)
    basic.showString("" + colors[2])
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(values[1])
    basic.pause(100)
    basic.showString("" + colors[1])
})
function f2(s:string) {
    
}

function f1() {
    
}

let colors : string[] = []
let values : number[] = []
values = [1, 2, 3]
colors = ["R", "G", "B"]
let fcts = ["R", "G", "B"]
basic.forever(function on_forever() {
    
})
let text_list: string[] = []
function f4(){
     f2("this");
}
let  flist = [f4, f2, f1]


flist[2]("no")
