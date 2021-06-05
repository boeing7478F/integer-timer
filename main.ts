let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = 0
    basic.pause(100)
    for (let index = 0; index < 100; index++) {
        basic.showNumber(counter)
        basic.pause(100)
        counter += 1
    }
})
