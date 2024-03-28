function moveSprite(direction) {
    var right = document.getElementById('right').value;
    var left = document.getElementById('left').value;
    var down = document.getElementById('down').value;
    var up = document.getElementById('up').value;

    var sprite = document.getElementById('sprite');
    var container = document.getElementById('container');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var spriteWidth = sprite.offsetWidth;
    var spriteHeight = sprite.offsetHeight;
    var newPositionLeft = parseInt(window.getComputedStyle(sprite).getPropertyValue('left'));
    var newPositionTop = parseInt(window.getComputedStyle(sprite).getPropertyValue('top'));

    switch (direction) {
        case 'right':
            newPositionLeft += parseInt(right) * 50;
            break;
        case 'left':
            newPositionLeft -= parseInt(left) * 50;
            break;
        case 'down':
            newPositionTop += parseInt(down) * 50;
            break;
        case 'up':
            newPositionTop -= parseInt(up) * 50;
            break;
    }

    var steps = "left=" + left + "&right=" + right + "&up=" + up + "&down=" + down;

    newPositionLeft = Math.max(0, Math.min(newPositionLeft, containerWidth - spriteWidth));
    newPositionTop = Math.max(0, Math.min(newPositionTop, containerHeight - spriteHeight));

    sprite.style.left = newPositionLeft + 'px';
    sprite.style.top = newPositionTop + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + steps + "&direction=" + direction, true);
    xhr.send();
}

function rotateSprite(direction) {
    // Get the degrees input value
    var degreesInput = parseInt(document.getElementById(direction === 'clockwise' ? 'clockwise' : 'counter-clockwise').value);

    // Check if degrees input is a valid number
    if (isNaN(degreesInput)) {
        alert("Please enter a valid number for degrees.");
        return;
    }
    var steps = "clockwise=" + clockwise + "&cclockwise=" + cclockwise;

    // Send the message to the backend using AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Upon receiving response from backend, display "Hello" along with provided degrees
            var response = "Hello, " + xhr.responseText;
            document.getElementById('responseArea').innerText = response;
        }
    };
    xhr.open("GET", "backend.php?" + steps + "&direction=" + direction, true);
    xhr.send();
}