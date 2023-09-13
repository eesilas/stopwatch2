let start = 0
let passtime = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    passtime = passtime - start
    basic.showNumber(Math.trunc(passtime + 1000))
    basic.showString(".")
    basic.showNumber(passtime % 1000)
    basic.showIcon(IconNames.Yes)
})
