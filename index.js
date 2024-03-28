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
    var degreesInput = parseInt(document.getElementById(direction === 'clockwise' ? 'clockwise' : 'cclockwise').value);

    if (isNaN(degreesInput)) {
        alert("Please enter a valid number for degrees.");
        return;
    }

    var sprite = document.getElementById('sprite');
    var currentRotation = getRotationDegrees(sprite);
    var newRotation = direction === 'clockwise' ? currentRotation + degreesInput : currentRotation - degreesInput;

    // Adjust the new rotation to be between 0 and 360 degrees
    newRotation = (360 + newRotation) % 360;

    sprite.style.transform = 'rotate(' + newRotation + 'deg)';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    var params = "direction=" + direction + "&degrees=" + degreesInput;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function getRotationDegrees(obj) {
    var matrix = window.getComputedStyle(obj).getPropertyValue("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        return (angle < 0) ? angle + 360 : angle;
    }
    return 0;
}
