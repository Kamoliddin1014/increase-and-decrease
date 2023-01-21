let a = 0;
function increase() {
    a++;
    document.querySelector('h1').innerHTML = a;
}
function decrease() {
    a--;
    document.querySelector('h1').innerHTML = a;
}