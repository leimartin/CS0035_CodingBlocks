function show_buttons(category) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contentArea").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "components/" + category + ".php", true);
    xhttp.send();
}

// motion
function move_sprite(direction) {
    var right = document.getElementById('right').value;
    var left = document.getElementById('left').value;
    var down = document.getElementById('down').value;
    var up = document.getElementById('up').value;

    var container_width = document.getElementById('container').offsetWidth;
    var container_height = document.getElementById('container').offsetHeight;

    var sprite_width = document.getElementById('sprite').offsetWidth;
    var sprite_height = document.getElementById('sprite').offsetHeight;

    var position_left = parseInt(window.getComputedStyle(document.getElementById('sprite')).getPropertyValue('left'));
    var position_top = parseInt(window.getComputedStyle(document.getElementById('sprite')).getPropertyValue('top'));

    switch (direction) {
        case 'right':
            position_left += parseInt(right);
            break;
        case 'left':
            position_left -= parseInt(left);
            break;
        case 'down':
            position_top += parseInt(down);
            break;
        case 'up':
            position_top -= parseInt(up);
            break;
    }

    position_left = Math.max(0, Math.min(position_left, container_width - sprite_width));
    position_top = Math.max(0, Math.min(position_top, container_height - sprite_height));

    document.getElementById('sprite').style.left = position_left + 'px';
    document.getElementById('sprite').style.top = position_top + 'px';

    var steps = "left=" + left + "&right=" + right + "&up=" + up + "&down=" + down;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response-area').innerText = xhr.responseText;
        }
    };
    xhr.open("GET", "backend.php?" + steps + "&direction=" + direction, true);
    xhr.send();
}

// motion
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

function rotation_degrees(obj) {
    var matrix = window.getComputedStyle(obj).getPropertyValue("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var x = values[0];
        var y = values[1];
        var angle = Math.round(Math.atan2(y, x) * (180 / Math.PI));
        return (angle < 0) ? angle + 360 : angle;
    } return 0;
}

// motion
function random_coordinates(container, sprite) {
    var random_left = Math.floor(Math.random() * (container.offsetWidth - sprite.offsetWidth));
    var random_right = Math.floor(Math.random() * (container.offsetHeight - sprite.offsetHeight));

    return { left: random_left, top: random_right };
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



function add_circles(operator) {
    var add_num1 = parseInt(document.getElementById('add-lnum').value);
    var add_num2 = parseInt(document.getElementById('add-rnum').value);

    var total = add_num1 + add_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < total; i++) {
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

    var total = sub_num1 - sub_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < total; i++) {
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

    var total = mult_num1 * mult_num2;
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < total; i++) {
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

    var total = Math.floor(div_num1 / div_num2);
    var circle_container = document.getElementById('circle-container');

    while (circle_container.firstChild) {
        circle_container.removeChild(circle_container.firstChild);
    }

    for (var i = 0; i < total; i++) {
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
            updated_size = Math.max(sprite_size, Math.max(lNum, rNum));
            break;
        case 'less':
            updated_size = Math.min(sprite_size, Math.min(lNum, rNum));
            break;
        case 'greaterEqual':
            var increase = (rNum + lNum) / 50;
            updated_opacity = Math.min(1, sprite_opacity + increase);
            break;
        case 'lessEqual':
            var decrease = (rNum - lNum) / 50;
            updated_opacity = Math.max(0, sprite_opacity - decrease);
            break;
        case 'equal':
            updated_opacity = 1;
            break;
        case 'notEqual':
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
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });