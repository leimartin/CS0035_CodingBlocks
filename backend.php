<?php
if (isset($_GET['direction']) && isset($_GET['left']) && isset($_GET['right']) && isset($_GET['up']) && isset($_GET['down'])) {
    $direction = $_GET['direction'];
    $left = $_GET['left'];
    $right = $_GET['right'];
    $up = $_GET['up'];
    $down = $_GET['down'];


    switch ($direction) {
        case 'left':
            echo "position_left -= " . $left . ";";
            break;
        case 'right':
            echo "position_left += " . $right . ";";
            break;
        case 'down':
            echo "position_top += " . $down . ";";
            break;
        case 'up':
            echo "position_top -= " . $up . ";";
            break;
    }
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

    echo "var random_left = Math.floor(Math.random() * (container.offsetWidth - sprite.offsetWidth));\n";
    echo "var random_right = Math.floor(Math.random() * (container.offsetHeight - sprite.offsetHeight));\n";
    echo "return { left: random_left, top: random_right };";

} else if (isset($_GET['operator']) && isset($_GET['num1']) && isset($_GET['num2'])) {
    $operator = $_GET['operator'];
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    if ($operator === 'add') {
        $result = $num1 + $num2;
        echo "let " . "result = " .  $num1 . " + " . $num2;
    } elseif ($operator === 'subtract') {
        $result = $num1 - $num2;
        echo "let " . "result = " .  $num1 . " - " . $num2;
    } elseif ($operator === 'multiply') {
        $result = $num1 * $num2;
        echo "let " . "result = " .  $num1 . " * " . $num2;
    } elseif ($operator === 'divide') {
        if ($num2 != 0) {
            echo "let " . "result = " .  $num1 . " / " . $num2;
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
            echo "$lNum > $rNum";
            break;
        case 'less':
            echo "$lNum < $rNum";
            break;
        case 'greaterEqual':
            echo "$lNum >= $rNum";
            break;
        case 'lessEqual':
            echo "$lNum <= $rNum";
            break;
        case 'equal':
            echo "$lNum == $rNum";
            break;
        case 'notEqual':
            echo "$lNum != $rNum";
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
