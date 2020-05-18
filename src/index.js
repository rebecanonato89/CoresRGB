function changeColor() {
    let red = document.getElementById("rangeRed").value;
    let green = document.getElementById("rangeGreen").value;
    let blue = document.getElementById("rangeBlue").value;

    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    document.body.style.backgroundColor = color;

    document.getElementById('quadrado').style.backgroundColor = color;

    document.getElementById('colorOutput').innerHTML = ': ' + color;

    document.getElementById('textRed').value = red;
    document.getElementById('textGreen').value = green;
    document.getElementById('textBlue').value = blue;

}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);