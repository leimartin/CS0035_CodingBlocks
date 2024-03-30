function show_buttons(category) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-area").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "components/" + category + ".html", true);
    xhttp.send();
}

// motion-1
function move_sprite(direction) {
    var step_size = parseInt(document.getElementById(direction).value);
    var container = document.getElementById('container');
    var sprite = document.getElementById('sprite');

    var current_left = parseInt(window.getComputedStyle(sprite).getPropertyValue('left'));
    var current_top = parseInt(window.getComputedStyle(sprite).getPropertyValue('top'));

    var radians = (rotation_degrees(sprite)) * Math.PI / 180;

    var horizontal = Math.cos(radians) * step_size;
    var vertical = Math.sin(radians) * step_size;

    switch (direction) {
        case 'right':
            current_left += horizontal;
            current_top += vertical;
            break;
        case 'left':
            current_left -= horizontal;
            current_top -= vertical;
            break;
        case 'down':
            current_left -= vertical;
            current_top += horizontal;
            break;
        case 'up':
            current_left += vertical;
            current_top -= horizontal;
            break;
    }

    current_left = Math.max(0, Math.min(current_left, container.offsetWidth - sprite.offsetWidth));
    current_top = Math.max(0, Math.min(current_top, container.offsetHeight - sprite.offsetHeight));

    sprite.style.left = current_left + 'px';
    sprite.style.top = current_top + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    var steps = step_size + "&current_left=" + current_left + "&current_top=" + current_top;
    xhr.open("GET", "backend.php?step_size=" + steps + "&direction=" + direction, true);
    xhr.send();


}



// motion-2
function rotation_degrees(object) {
    var matrix = window.getComputedStyle(object).getPropertyValue("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var x = values[0];
        var y = values[1];
        var angle = Math.round(Math.atan2(y, x) * (180 / Math.PI));
        return (angle < 0) ? angle + 360 : angle;
    } return 0;
}

function rotate_sprite(direction) {
    var degrees = parseInt(document.getElementById(direction === 'clockwise' ? 'clockwise' : 'counter-clockwise').value);

    var current_rotation = rotation_degrees(document.getElementById('sprite'));
    var new_rotation = direction === 'clockwise' ? current_rotation + degrees : current_rotation - degrees;
    new_rotation = (360 + new_rotation) % 360;

    document.getElementById('sprite').style.transform = 'rotate(' + new_rotation + 'deg)';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    var params = "direction=" + direction + "&degrees=" + degrees;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

// motion-3
function random_coordinates(container, sprite) {
    var random_left = Math.floor(Math.random() * (container.offsetWidth - sprite.offsetWidth));
    var random_top = Math.floor(Math.random() * (container.offsetHeight - sprite.offsetHeight));

    return { left: random_left, top: random_top };
}

function random_position() {
    var random_coordinate = random_coordinates(document.getElementById('container'), document.getElementById('sprite'));

    document.getElementById('sprite').style.left = random_coordinate.left + 'px';
    document.getElementById('sprite').style.top = random_coordinate.top + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    var params = "left=" + random_coordinate.left + "&top=" + random_coordinate.top;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

// motion-4
function move_axis() {

    var goto_x = parseInt(document.getElementById('goto-x').value);
    var goto_y = parseInt(document.getElementById('goto-y').value);

    var container = document.getElementById('container');
    var sprite = document.getElementById('sprite');

    updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_x));
    sprite.style.left = updated_x + 'px';

    updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_y));
    sprite.style.top = updated_y + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    var params = "&x=" + goto_x + "&y=" + goto_y;
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

// motion-5
function random_glide() {
    var movement_duration = parseInt(document.getElementById('glide-rand').value);
    var random_coordinate = random_coordinates(document.getElementById('container'), document.getElementById('sprite'));

    setTimeout(function () {
        document.getElementById('sprite').style.left = random_coordinate.left + 'px';
        document.getElementById('sprite').style.top = random_coordinate.top + 'px';

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('response-area').innerText = xhr.responseText;
            }
        };

        xhr.open("GET", "backend.php?&glide_rand=" + movement_duration, true);
        xhr.send();
    }, movement_duration * 1000);
}

// motion-6
function move_rand_axis() {
    var movement_duration = parseInt(document.getElementById('glide-durationXY').value);

    var goto_randX = parseInt(document.getElementById('goto-randX').value);
    var goto_randY = parseInt(document.getElementById('goto-randY').value);

    var container = document.getElementById('container');
    var sprite = document.getElementById('sprite');

    setTimeout(function () {
        var updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_randX));
        sprite.style.left = updated_x + 'px';

        var updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_randY));
        sprite.style.top = updated_y + 'px';

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('response-area').innerText = xhr.responseText;
            }
        };

        xhr.open("GET", "backend.php?&glide_randXY=" + movement_duration, true);
        xhr.send();
    }, movement_duration * 1000);
}

// motion-7
function point_direction() {
    var degrees = parseInt(document.getElementById('point_degrees').value);

    var radians = degrees * Math.PI / 180;

    var updated_x = (document.getElementById('container').offsetWidth / 2) + Math.cos(radians) * (document.getElementById('sprite').offsetWidth / 2);
    var updated_y = (document.getElementById('container').offsetHeight / 2) + Math.sin(radians) * (document.getElementById('sprite').offsetHeight / 2);

    document.getElementById('sprite').style.left = (updated_x - document.getElementById('sprite').offsetWidth / 2) + 'px';
    document.getElementById('sprite').style.top = (updated_y - document.getElementById('sprite').offsetHeight / 2) + 'px';
    document.getElementById('sprite').style.transform = 'rotate(' + degrees + 'deg)';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    xhr.open("GET", "backend.php?position_direction=" + degrees, true);
    xhr.send();
}

// motion-8
function change_x() {
    var change_X = parseInt(document.getElementById('change_X').value);

    var updated_x = parseInt(document.getElementById('sprite').style.left || getComputedStyle(document.getElementById('sprite')).left) + change_X;

    updated_x = Math.max(0, Math.min(document.getElementById('container').offsetWidth - document.getElementById('sprite').offsetWidth, updated_x));

    document.getElementById('sprite').style.left = updated_x + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    xhr.open("GET", "backend.php?position_x=" + change_X, true);
    xhr.send();
}

// motion-8
function change_y() {
    var change_Y = parseInt(document.getElementById('change_Y').value);

    var updated_y = parseInt(document.getElementById('sprite').style.top || getComputedStyle(document.getElementById('sprite')).top) - change_Y;

    updated_y = Math.max(0, Math.min(document.getElementById('container').offsetHeight - document.getElementById('sprite').offsetHeight, updated_y));

    sprite.style.top = updated_y + 'px';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    xhr.open("GET", "backend.php?position_y=" + change_Y, true);
    xhr.send();
}



function add_circles(operator) {
    var add_num1 = parseInt(document.getElementById('add-lnum').value);
    var add_num2 = parseInt(document.getElementById('add-rnum').value);

    let result = add_num1 + add_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < result; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = '#97E7E1';
        circle.style.width = '25px';
        circle.style.height = '25px';
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 350 + 'px';
        circle.style.left = Math.random() * 350 + 'px';
        circle_container.appendChild(circle);
    }

    var params = "operator=" + operator + "&num1=" + add_num1 + "&num2=" + add_num2;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}


function reduce_circles(operator) {
    var sub_num1 = parseInt(document.getElementById('sub-lnum').value);
    var sub_num2 = parseInt(document.getElementById('sub-rnum').value);

    let result = sub_num1 - sub_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < result; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = '#76885B';
        circle.style.width = '25px';
        circle.style.height = '25px';
        circle.style.borderRadius = '15px 50px 30px';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 350 + 'px';
        circle.style.left = Math.random() * 350 + 'px';
        circle_container.appendChild(circle);
    }

    var params = "operator=" + operator + "&num1=" + sub_num1 + "&num2=" + sub_num2;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function multiply_circles() {
    var mult_num1 = parseInt(document.getElementById('mul-lnum').value);
    var mult_num2 = parseInt(document.getElementById('mul-rnum').value);

    let result = mult_num1 * mult_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < result; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = '#D6DAC8';
        circle.style.width = '25px';
        circle.style.height = '25px';
        circle.style.borderRadius = '50%/20%';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 350 + 'px';
        circle.style.left = Math.random() * 350 + 'px';
        circle_container.appendChild(circle);
    }

    var params = "operator=multiply&num1=" + mult_num1 + "&num2=" + mult_num2;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function split_circles() {
    var div_num1 = parseInt(document.getElementById('div-lnum').value);
    var div_num2 = parseInt(document.getElementById('div-rnum').value);

    if (div_num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    let result = Math.floor(div_num1 / div_num2);
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < result; i++) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = '#D6DAC8';
        circle.style.width = '25px';
        circle.style.height = '25px';
        circle.style.borderRadius = '10px 50px / 30px';
        circle.style.position = 'absolute';
        circle.style.top = Math.random() * 350 + 'px';
        circle.style.left = Math.random() * 350 + 'px';
        circle_container.appendChild(circle);
    }

    var params = "operator=divide&num1=" + div_num1 + "&num2=" + div_num2;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

function compare(logic) {
    var lNum = parseInt(document.getElementById(logic + '-lnum').value);
    var rNum = parseInt(document.getElementById(logic + '-rnum').value);

    if (isNaN(lNum) || isNaN(rNum)) { return; }

    var sprite = document.getElementById('sprite');
    var container = document.getElementById('container');

    var sprite_size = parseInt(window.getComputedStyle(sprite).getPropertyValue('width'));
    var sprite_opacity = parseFloat(window.getComputedStyle(sprite).getPropertyValue('opacity'));

    var updated_size = sprite_size;
    var updated_opacity = sprite_opacity;

    switch (logic) {
        case 'greater':
            if (lNum > rNum)
                updated_size = Math.max(sprite_size, Math.max(lNum, rNum));
            break;
        case 'less':
            if (lNum < rNum)
                updated_size = Math.min(sprite_size, Math.min(lNum, rNum));
            break;
        case 'greaterEqual':
            var increase = (rNum + lNum) / 50;
            if (lNum >= rNum)
                updated_opacity = Math.min(1, sprite_opacity + increase);
            break;
        case 'lessEqual':
            var decrease = (rNum - lNum) / 50;
            if (lNum <= rNum)
                updated_opacity = Math.max(0, sprite_opacity - decrease);
            break;
        case 'equal':
            if (lNum == rNum)
                updated_opacity = 1;
            break;
        case 'notEqual':
            if (lNum != rNum)
                updated_opacity /= 2;
            break;
    }

    updated_size = Math.min(updated_size, Math.min(container.offsetWidth, container.offsetHeight));

    sprite.style.width = updated_size + 'px';
    sprite.style.height = updated_size + 'px';
    sprite.style.opacity = updated_opacity;

    sprite.style.left = (container.offsetWidth - sprite.offsetWidth) / 2 + 'px';
    sprite.style.top = (container.offsetHeight - sprite.offsetHeight) / 2 + 'px';

    var params = "lNum=" + lNum + "&rNum=" + rNum + "&logic=" + logic;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + params, true);
    xhr.send();
}

// events
function change_backdrop(backdrop) {
    var image_container = document.getElementById('container');

    switch (backdrop) {
        case 'sunset':
            image_container.style.backgroundImage = "url('images/sunset.jpg')";
            break;
        case 'forest':
            image_container.style.backgroundImage = "url('images/forest.jpg')";
            break;
        case 'sea':
            image_container.style.backgroundImage = "url('images/sea.jpg')";
            break;
        case 'city':
            image_container.style.backgroundImage = "url('images/city.jpg')";
            break;
        default:
            image_container.style.backgroundImage = "none"; // later
            break;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };

    xhr.open("GET", "backend.php?backdrop=" + backdrop, true);
    xhr.send();
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
});