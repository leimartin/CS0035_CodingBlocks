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
    xhr.onreadystatechange = function () {
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

    newRotation = (360 + newRotation) % 360;

    sprite.style.transform = 'rotate(' + newRotation + 'deg)';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
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
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        return (angle < 0) ? angle + 360 : angle;
    }
    return 0;
}

function addCircles(operator) {
    var add_lnum = parseInt(document.getElementById('add-lnum').value);
    var add_rnum = parseInt(document.getElementById('add-rnum').value);

    if (isNaN(add_lnum) || isNaN(add_rnum)) {
        alert("Please enter valid numbers.");
        return;
    }

    var total = add_lnum + add_rnum;
    var circleContainer = document.getElementById('circleContainer');

    while (circleContainer.firstChild) {
        circleContainer.removeChild(circleContainer.firstChild);
    }

    for (var i = 0; i < total; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = 'blue'; 
        circle.style.width = '20px';
        circle.style.height = '20px'; 
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 200 + 'px'; 
        circle.style.left = Math.random() * 200 + 'px'; 
        circleContainer.appendChild(circle);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    var params = "operator=" + operator + "&num1=" + add_lnum + "&num2=" + add_rnum;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}


function updateCircles(operator) {
    var sub_lnum = parseInt(document.getElementById('sub-lnum').value);
    var sub_rnum = parseInt(document.getElementById('sub-rnum').value);

    var total = sub_lnum - sub_rnum;
    var circleContainer = document.getElementById('circleContainer');

    while (circleContainer.firstChild) {
        circleContainer.removeChild(circleContainer.firstChild);
    }

    for (var i = 0; i < total; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = 'blue'; 
        circle.style.width = '20px'; 
        circle.style.height = '20px'; 
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 200 + 'px';
        circle.style.left = Math.random() * 200 + 'px'; 
        circleContainer.appendChild(circle);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    var params = "operator=" + operator + "&num1=" + sub_lnum + "&num2=" + sub_rnum;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function multiplyCircles() {
    var num1 = parseInt(document.getElementById('mul-lnum').value);
    var num2 = parseInt(document.getElementById('mul-rnum').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var total = num1 * num2;
    var circleContainer = document.getElementById('circleContainer');

    while (circleContainer.firstChild) {
        circleContainer.removeChild(circleContainer.firstChild);
    }

    for (var i = 0; i < total; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = 'blue'; 
        circle.style.width = '20px'; 
        circle.style.height = '20px'; 
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 200 + 'px';
        circle.style.left = Math.random() * 200 + 'px'; 
        circleContainer.appendChild(circle);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    var params = "operator=multiply&num1=" + num1 + "&num2=" + num2;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function divideCircles() {
    var num1 = parseInt(document.getElementById('div-lnum').value);
    var num2 = parseInt(document.getElementById('div-rnum').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    var total = Math.floor(num1 / num2); 
    var circleContainer = document.getElementById('circleContainer');

    while (circleContainer.firstChild) {
        circleContainer.removeChild(circleContainer.firstChild);
    }

    for (var i = 0; i < total; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = 'blue'; 
        circle.style.width = '20px'; 
        circle.style.height = '20px'; 
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 200 + 'px'; 
        circle.style.left = Math.random() * 200 + 'px'; 
        circleContainer.appendChild(circle);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    var params = "operator=divide&num1=" + num1 + "&num2=" + num2;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

// events
function changeBackdrop(backdrop) {
    var imageContainer = document.getElementById('container');

    switch (backdrop) {
        case 'sunset':
            imageContainer.style.backgroundImage = "url('../images/sunset.jpg')";
            break;
        case 'forest':
            imageContainer.style.backgroundImage = "url('../images/forest.jpg')";
            break;
        case 'sea':
            imageContainer.style.backgroundImage = "url('../images/sea.jpg')";
            break;
        case 'city':
            imageContainer.style.backgroundImage = "url('../images/city.jpg')";
            break;
        default:
            imageContainer.style.backgroundImage = "url('default.jpg')"; // later
            break;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('responseArea').innerText = xhr.responseText;
        }
    };

    xhr.open("GET", "backend.php?backdrop=" + backdrop, true);
    xhr.send();
}

