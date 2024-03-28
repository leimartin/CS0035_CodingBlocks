<?php
if (isset($_GET['direction']) && isset($_GET['left']) && isset($_GET['right']) && isset($_GET['up']) && isset($_GET['down'])) {
    $direction = $_GET['direction'];
    $left = $_GET['left'];
    $right = $_GET['right'];
    $up = $_GET['up'];
    $down = $_GET['down'];


    switch ($direction) {
        case 'left':
            echo "newPositionLeft -= " . $left . " * 50;";
            break;
        case 'right':
            echo "newPositionLeft += " . $right . " * 50;";
            break;
        case 'down':
            echo "newPositionLeft += " . $down . " * 50;";
            break;
        case 'up':
            echo "newPositionLeft -= " . $up . " * 50;";
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
} else if (isset($_GET['operator']) && isset($_GET['num1']) && isset($_GET['num2'])) {
    $operator = $_GET['operator'];
    $num1 = $_GET['num1'];
    $num2 = $_GET['num2'];

    if ($operator === 'add') {
        $result = $num1 + $num2;
        echo "$" . "result = " .  $num1 . " + " . $num2;
    } elseif ($operator === 'subtract') {
        $result = $num1 - $num2;
        echo "$" . "result = " .  $num1 . " - " . $num2;
    } elseif ($operator === 'multiply') {
        $result = $num1 * $num2;
        echo "$" . "result = " .  $num1 . " * " . $num2;
    } elseif ($operator === 'divide') {
        if ($num2 != 0) {
            echo "$" . "result = " .  $num1 . " / " . $num2;
        } else {
            echo "Invalid.";
        }
    }
} else if (isset($_GET['backdrop'])) {
    $backdrop = $_GET['backdrop'];

    $responses = array(
        'sunset' => 'Changed backdrop to sunset.',
        'sea' => 'Changed backdrop to sea.',
        'forest' => 'Changed backdrop to forest.',
        'city' => 'Changed backdrop to city.'
    );

    if (array_key_exists($backdrop, $responses)) {
        echo $responses[$backdrop];
    } else {
        echo 'Invalid backdrop selection.';
    }
} else {
    echo "Error: Direction or steps values not provided.";
}
