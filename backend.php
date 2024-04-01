<?php
if (isset($_GET['step_size']) && isset($_GET['direction']) && isset($_GET['current_left']) && isset($_GET['current_top'])) {
    $step_size = $_GET['step_size'];
    $direction = $_GET['direction'];
    $current_left = $_GET['current_left'];
    $current_top = $_GET['current_top'];

    switch ($direction) {
        case 'left':
            echo <<<EOT
                current_left -= horizontal;
                echo "current_top -= vertical;
            EOT;
            break;
        case 'right':
            echo <<<EOT
                current_left += horizontal;
                current_top += vertical;
            EOT;
            break;
        case 'down':
            echo <<<EOT
                current_left -= vertical;
                current_top += horizontal;
            EOT;
            break;
        case 'up':
            echo <<<EOT
                "current_left += vertical;
                "current_top -= horizontal;
            EOT;
            break;
    }
    echo <<<EOT
        current_left = Math.max(0, Math.min(current_left, container.offsetWidth - sprite.offsetWidth));
        echo "current_top = Math.max(0, Math.min(current_top, container.offsetHeight - sprite.offsetHeight));
    EOT;
} else if (isset($_GET['direction']) && isset($_GET['degrees'])) {
    $direction = $_GET['direction'];

    if ($direction == 'clockwise') {
        echo <<<EOT
            let rotate_clockwise = degrees % 360;
            if (rotate_clockwise < 0) {
            rotate_clockwise += 360;
            }
        EOT;
    } else {
        echo "let rotate_counterclockwise = (360 - (angle % 360)) % 360;\n";
    }
} else if (isset($_GET['left']) && isset($_GET['top'])) {
    $left = $_GET['left'];
    $top = $_GET['top'];
    echo <<<EOT
        function random_coordinates(container, sprite) {
            var random_left = Math.floor(Math.random() * (container.offsetWidth - sprite.offsetWidth));
            var random_right = Math.floor(Math.random() * (container.offsetHeight - sprite.offsetHeight));
            return { left: random_left, top: random_right };
        }";
    EOT;
} else if (isset($_GET['x']) && isset($_GET['y'])) {
    $x = $_GET['x'];
    $y = $_GET['y'];

    echo <<<EOT
        updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_x));
        updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_y));
    EOT;
} else if (isset($_GET['glide_rand'])) {
    echo <<<EOT
        var movement_duration = parseInt(document.getElementById('glide-rand').value);
        var random_coordinate = random_coordinates(document.getElementById('container'), document.getElementById('sprite'));
        setTimeout(function () {
            document.getElementById('sprite').style.left = random_coordinate.left + 'px';
            document.getElementById('sprite').style.top = random_coordinate.top + 'px';
        }, movement_duration * 1000);
    EOT;
} else if (isset($_GET['glide_randXY'])) {
    echo <<<EOT
        var movement_duration = parseInt(document.getElementById('glide-rand').value);
        setTimeout(function () {
        var updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_randX));
        var updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_randY));
        }, movement_duration * 1000);
    EOT;
} else if (isset($_GET['position_direction'])) {
    echo <<<EOT
        var updated_x = (document.getElementById('container').offsetWidth / 2) + Math.cos(radians) * (document.getElementById('sprite').offsetWidth / 2);
        var updated_y = (document.getElementById('container').offsetHeight / 2) + Math.sin(radians) * (document.getElementById('sprite').offsetHeight / 2);
    EOT;
} else if (isset($_GET['position_x'])) {
    echo <<<EOT
        var change_X = parseInt(document.getElementById('change_X').value);
        var updated_x = parseInt(document.getElementById('sprite').style.left || getComputedStyle(document.getElementById('sprite')).left) + change_X;
        updated_x = Math.max(0, Math.min(document.getElementById('container').offsetWidth - document.getElementById('sprite').offsetWidth, updated_x));
    EOT;
} else if (isset($_GET['position_y'])) {
    echo <<<EOT
        var change_Y = parseInt(document.getElementById('change_Y').value);
        var updated_y = parseInt(document.getElementById('sprite').style.top || getComputedStyle(document.getElementById('sprite')).top) - change_Y;
        updated_y = Math.max(0, Math.min(document.getElementById('container').offsetHeight - document.getElementById('sprite').offsetHeight, updated_y));
    EOT;
} else if (isset($_GET['operator']) && isset($_GET['num1']) && isset($_GET['num2'])) {
    $operator = $_GET['operator'];
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    if ($operator === 'add') {
        echo "let result = add_num1 + add_num2;";
    } elseif ($operator === 'subtract') {
        echo "let result = sub_num1 - sub_num2;";
    } elseif ($operator === 'multiply') {
        echo "let result = mult_num1 * mult_num2;";
    } elseif ($operator === 'divide') {
        if ($num2 != 0) {
            echo "let result = Math.floor(div_num1 / div_num2);";
        } else {
            echo "Invalid.";
        }
    }
} else if (isset($_GET['lNum']) && isset($_GET['rNum']) && isset($_GET['logic'])) {
    $lNum = $_GET['lNum'];
    $rNum = $_GET['rNum'];
    $logic = $_GET['logic'];

    switch ($logic) {
        case 'greater':
            echo <<<EOT
                if (lNum > rNum)
                    updated_size = Math.max(sprite_size, Math.max(lNum, rNum));
            EOT;
            break;
        case 'less':
            echo <<<EOT
                if (lNum < rNum)
                    updated_size = Math.min(sprite_size, Math.min(lNum, rNum));
            EOT;
            break;
        case 'greaterEqual':
            echo <<<EOT
                var increase = (rNum + lNum) / 50;
                if (lNum >= rNum) { 
                    updated_opacity = Math.min(1, sprite_opacity + increase);
                }
            EOT;
            break;
        case 'lessEqual':
            echo <<<EOT
                var decrease = (rNum - lNum) / 50;
                if (lNum <= rNum) { 
                    pdated_opacity = Math.max(0, sprite_opacity - decrease); 
                }
            EOT;
            break;
        case 'equal':
            echo <<<EOT
                if (lNum == rNum) { 
                    updated_opacity = 1; 
                }
            EOT;
            break;
        case 'notEqual':
            echo <<<EOT
                if (lNum != rNum) { 
                    updated_opacity /= 2;
                }
            EOT;
            break;
        default:
            echo "Invalid logic";
            break;
    }
} else if (isset($_GET['backdrop'])) {
    $backdrop = $_GET['backdrop'];

    $responses = array(
        'sunset' => 'imageContainer.style.backgroundImage = "url(\'images/sunset.jpg\')";',
        'sea' => 'imageContainer.style.backgroundImage = "url(\'images/sea.jpg\')";',
        'forest' => 'imageContainer.style.backgroundImage = "url(\'images/forest.jpg\')";',
        'city' => 'imageContainer.style.backgroundImage = "url(\'images/city.jpg\')";',
        'default' => 'imageContainer.style.backgroundImage = "none";',
    );

    if (array_key_exists($backdrop, $responses)) {
        echo $responses[$backdrop];
    } else {
        echo 'Invalid backdrop selection.';
    }
} else if (isset($_GET['text'])) {
    echo <<<EOT
        var display_text = document.createElement('div');
        display_text.textContent = text;
        display_text.classList.add('say_something');

        display_text.style.left = (sprite_rec.right - container_rec.left) + 'px';
        display_text.style.top = (sprite_rec.top - container_rec.top) + 'px';

        setTimeout(function() {
            display_text.remove();
        }, duration);
    EOT;
} else if (isset($_GET['text_intact'])) {
    echo <<<EOT
        var display_text = document.createElement('div');
        display_text.textContent = text;
        display_text.classList.add('say_something');

        display_text.style.left = (sprite_rec.right - container_rec.left) + 'px';
        display_text.style.top = (sprite_rec.top - container_rec.top) + 'px';
    EOT;
} else {
    echo "Error: values not provided.";
}

