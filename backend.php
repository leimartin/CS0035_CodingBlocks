<?php
if (isset($_GET['step_size']) && isset($_GET['direction']) && isset($_GET['current_left']) && isset($_GET['current_top'])) {
    $step_size = $_GET['step_size'];
    $direction = $_GET['direction'];
    $current_left = $_GET['current_left'];
    $current_top = $_GET['current_top'];

    switch ($direction) {
        case 'left':
            echo "current_left -= horizontal;\n";
            echo "current_top -= vertical;";
            break;
        case 'right':
            echo "current_left += horizontal;\n";
            echo "current_top += vertical;";
            break;
        case 'down':
            echo "current_left -= vertical;\n";
            echo "current_top += horizontal;";
            break;
        case 'up':
            echo "current_left += vertical;\n";
            echo "current_top -= horizontal;";
            break;
    }
    echo "current_left = Math.max(0, Math.min(current_left, container.offsetWidth - sprite.offsetWidth));\n";
    echo "current_top = Math.max(0, Math.min(current_top, container.offsetHeight - sprite.offsetHeight));";
} else if (isset($_GET['direction']) && isset($_GET['degrees'])) {
    $direction = $_GET['direction'];
    $degrees = $_GET['degrees'];

    if ($direction == 'clockwise') {
        echo "let rotate_clockwise = " . $degrees . " % 360;\n";
        echo "if (rotate_clockwise < 0) {\n";
        echo "rotate_clockwise += 360;\n";
        echo "}\n";
        echo "return rotate_clockwise;";
    } else {
        echo "let rotate_counterclockwise = (360 - (angle % 360)) % 360;\n";
        echo "return rotate_counterclockwise;";
    }
} else if (isset($_GET['left']) && isset($_GET['top'])) {
    $left = $_GET['left'];
    $top = $_GET['top'];
    echo "function random_coordinates(container, sprite) {\n";
    echo "var random_left = Math.floor(Math.random() * (container.offsetWidth - sprite.offsetWidth));\n";
    echo "var random_right = Math.floor(Math.random() * (container.offsetHeight - sprite.offsetHeight));\n";
    echo "return { left: random_left, top: random_right };\n";
    echo "}";
} else if (isset($_GET['x']) && isset($_GET['y'])) {
    $x = $_GET['x'];
    $y = $_GET['y'];

    echo "updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_x));\n";
    echo "updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_y));";
} else if (isset($_GET['glide_rand'])) {
    echo "var movement_duration = parseInt(document.getElementById('glide-rand').value);\n";
    echo "var random_coordinate = random_coordinates(document.getElementById('container'), document.getElementById('sprite'));\n";
    echo "setTimeout(function () {\n";
    echo "document.getElementById('sprite').style.left = random_coordinate.left + 'px';\n";
    echo "document.getElementById('sprite').style.top = random_coordinate.top + 'px';\n";
    echo "}, movement_duration * 1000);";
} else if (isset($_GET['glide_randXY'])) {
    echo "var movement_duration = parseInt(document.getElementById('glide-rand').value);\n";
    echo "setTimeout(function () {\n";
    echo "var updated_x = Math.max(0, Math.min(container.offsetWidth - sprite.offsetWidth, (container.offsetWidth / 2) + goto_randX));\n";
    echo " var updated_y = Math.max(0, Math.min(container.offsetHeight - sprite.offsetHeight, (container.offsetHeight / 2) - goto_randY));\n";
    echo "}, movement_duration * 1000);";
} else if (isset($_GET['position_direction'])) {
    echo "var updated_x = (document.getElementById('container').offsetWidth / 2) + Math.cos(radians) * (document.getElementById('sprite').offsetWidth / 2);\n";
    echo "var updated_y = (document.getElementById('container').offsetHeight / 2) + Math.sin(radians) * (document.getElementById('sprite').offsetHeight / 2);";
} else if (isset($_GET['position_x'])) {
    echo "var change_X = parseInt(document.getElementById('change_X').value);";
    echo "var updated_x = parseInt(document.getElementById('sprite').style.left || getComputedStyle(document.getElementById('sprite')).left) + change_X;]\n";
    echo "updated_x = Math.max(0, Math.min(document.getElementById('container').offsetWidth - document.getElementById('sprite').offsetWidth, updated_x));";
} else if (isset($_GET['position_y'])) {
    echo "var change_Y = parseInt(document.getElementById('change_Y').value);\n";
    echo "var updated_y = parseInt(document.getElementById('sprite').style.top || getComputedStyle(document.getElementById('sprite')).top) - change_Y;\n";
    echo "updated_y = Math.max(0, Math.min(document.getElementById('container').offsetHeight - document.getElementById('sprite').offsetHeight, updated_y));";
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
            echo "if (lNum > rNum)\n";
            echo "updated_size = Math.max(sprite_size, Math.max(lNum, rNum));\n";
            break;
        case 'less':
            echo "if (lNum < rNum)\n";
            echo "updated_size = Math.min(sprite_size, Math.min(lNum, rNum));";
            break;
        case 'greaterEqual':
            echo "var increase = (rNum + lNum) / 50;\n";
            echo "if (lNum >= rNum) { updated_opacity = Math.min(1, sprite_opacity + increase) };";
            break;
        case 'lessEqual':
            echo "var decrease = (rNum - lNum) / 50;\n";
            echo "if (lNum <= rNum) { updated_opacity = Math.max(0, sprite_opacity - decrease) };";
            break;
        case 'equal':
            echo "if (lNum == rNum) { updated_opacity = 1 };";
            break;
        case 'notEqual':
            echo "if (lNum != rNum) { updated_opacity /= 2 };";
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
} else {
    echo "Error: values not provided.";
}
