function a(num) {
    if (num == 1) {
        printing(1)
    }else {
        printing(num)
        a(num -1)
    }
}

function printing(num) {
    console.log((new Array(num)).fill("*").join(""));

}
a(2)